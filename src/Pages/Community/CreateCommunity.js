import { Add } from "@material-ui/icons";
import { useForm } from "react-hook-form";
import React, { useEffect, useLayoutEffect, useState } from "react";
import CreateCommunityFriendList from "../../Components/Friends/CreateCommunityFriendList";
import { useParams } from "react-router-dom";
import friendProps from "../../Asset/Dummy/user.json";
import Loading from "../../Shared/Loading/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import toast, { Toaster } from "react-hot-toast";
import { set } from "nprogress";
import { API_URL } from "../../API/config";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

function CreateCommunity() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [uploadImage, setUploadImage] = useState(null);
  const [imgFile, setImageFile] = useState(null);
  const [friends, setFriends] = useState([]);
  const friendParams = useParams();
  const [countFriends, setCountFriends] = useState(0);
  const [addedFriendData, setAddedFriendData] = useState([]);
  const [isTrue, setIsTrue] = useState(true);
  const [data1, setData1] = useState({});
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [select, setSelect] = useState("");
  const [sports, setSports] = useState([]);
  const { user } = useContext(AuthContext);

  console.log("name:", name);
  console.log("des:", des);
  console.log("select:", select);
  useEffect(() => {
    if (addedFriendData.length >= 3) {
      if (name !== "" && des.length >= 20 && select !== "") {
        setIsTrue(false);
      }
    }
  }, [addedFriendData, name, des, select]);

  useEffect(() => {
    if (name === "" || des.length < 20 || select === "") {
      setIsTrue(true);
    }
  }, [name, des, select]);

  const comName = (e) => {
    setName(e.target.value);
  };
  const comDes = (e) => {
    setDes(e.target.value);
  };

  const sportSelect = (e) => {
    setSelect(e.target.value);
  };

  const fetchFriends = async ({ pageParam = 1 }) => {
    // const queryParam = "?page=" + page + "&limit=" + limit;
    // const url = apiPath + queryParam

    const url = `${API_URL}/api/v1/user/friendslist?page=${pageParam}&limit=${10}&userId=${
      user.id
    }`;
    console.log("url:", url);
    const res = await fetch(url, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();

    return {
      data: data.friends,
    };
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["myfriendList", user.id],
    queryFn: fetchFriends,
    getNextPageParam: (lastPage, pages) => {
      console.log("lastPage:", lastPage);
      console.log("pages:", pages);
      if (lastPage.data.length < 10) {
        return undefined;
      }
      return pages.length + 1;
    },
  });

  const getSports = async () => {
    const res = await fetch(`${API_URL}/api/v1/sport/sports`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    const data = await res.json();

    console.log(data);
    setSports(data.sports);
    return data;
  };

  useEffect(() => {
    getSports();
  }, []);

  const previewImage = (event) => {
    const imageFiles = event.target.files;
    const fileSize = event.target.files[0].size / 1024 / 1024;
    const fileType = event.target.files[0].type;
    console.log(fileType);
    if (fileSize > 2) {
      setUploadImage(null);
      toast.success("File size greater than 2mb", {
        style: {
          border: "1px solid blue",
          padding: "16px",
          color: "black",
        },
        iconTheme: {
          primary: "blue",
          secondary: "yellow",
        },
      });
      return;
    }

    if (
      fileType !== "image/jpeg" &&
      fileType !== "image/jpg" &&
      fileType !== "image/png"
    ) {
      setUploadImage(null);
      toast.success("File type must be jpg, jpeg or png", {
        style: {
          border: "1px solid blue",
          padding: "16px",
          color: "black",
        },
        iconTheme: {
          primary: "blue",
          secondary: "yellow",
        },
      });
      return;
    }
    setImageFile(imageFiles[0]);
    const imageFilesLength = imageFiles.length;
    if (imageFilesLength > 0) {
      const imageSrc = URL.createObjectURL(imageFiles[0]);
      setUploadImage(imageSrc);
    }
  };

  const comData = (data) => {
    console.log(data);
    setData1(data);

    // console.log("submitted dsata", data1);
  };

  const handleCommunity = (data1) => {
    const proceed = window.confirm(`Are you sure you want to create community`);
    if (proceed) {
      if (imgFile) {
        const formData = new FormData();
        formData.append("image", imgFile);
        formData.append("communityName", data1.communityName);
        formData.append("description", data1.description);
        formData.append("sportSelect", data1.sportSelect);
        console.log(formData);
      }
      console.log(data1.communityName, data1.description, data1.sportSelect);
    }
  };

  //    console.log(data1)
  return (
    <>
      <div className="my-16">
        <div className="text-lg lg:text-2xl text-center mt-20 font-bold">
          Create your Community
        </div>
        <form onSubmit={handleSubmit(comData)}>
          <input
            type="text"
            {...register("communityRule", {
              required: "Community description is required",
            })}
            defaultValue="Rule"
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs hidden"
          />
          <div className="shadow  overflow-y-auto sm:rounded-md">
            <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 items-center">
                <div className="form-floating mb-3 ">
                  <input
                    type="text"
                    {...register("communityName", {
                      required: "Community description is required",
                    })}
                    onChange={comName}
                    className="form-control
  block
  w-full
  px-3
  py-1.5
  text-base
  font-normal
  text-gray-700
  bg-white bg-clip-padding
  border border-solid border-gray-300
  rounded
  transition
  ease-in-out
  m-0
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput" className="text-gray-700">
                    Community Name*
                  </label>
                  {errors.communityName && (
                    <p className="text-red-500">Community name is required</p>
                  )}
                  <p className="mt-2 text-sm text-gray-500">
                    Give a name to your community which is required.
                  </p>
                </div>
                <div className="mt-[-20px]">
                  <select
                    className="select select-bordered w-full px-3
  py-1.5
  text-base
  font-normal
  text-gray-700
  bg-white bg-clip-padding
  border border-solid border-gray-300
  rounded
  transition
  ease-in-out
  m-0
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    {...register("sportSelect", {
                      required: true,
                    })}
                    onChange={sportSelect}
                    disabled={sports.length === 0}
                  >
                    <option disabled selected value="">
                      Community category
                    </option>

                    {sports.length &&
                      sports.map((sport) => (
                        <option value={sport.id}>{sport.name}</option>
                      ))}
                  </select>
                  {errors.sportSelect && (
                    <p className="text-red-500">
                      Community category is required
                    </p>
                  )}
                  <p className="mt-2 text-sm text-gray-500">
                    Select sport's category and it is required
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 items-center ">
                <div>
                  <label
                    for="description"
                    className="block text-sm font-medium text-gray-700 mb-3"
                  >
                    Description*
                  </label>
                  <div className="">
                    <textarea
                      id="description"
                      {...register("description", {
                        required: "Community description is required",
                      })}
                      onChange={comDes}
                      rows="14"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm resize-none"
                      placeholder=""
                    ></textarea>
                    {errors.description && (
                      <p className="text-red-500">
                        Write at least 20 characters
                      </p>
                    )}
                  </div>

                  <p className="mt-2 text-sm text-gray-500">
                    Brief description for your community is required*.
                  </p>
                </div>

                {/* FrindList */}

                <div className="mt-8">
                  <div className="flex flex-col justify-center text-gray-600">
                    <div className="w-full  mx-auto bg-white rounded-md border border-gray-200">
                      <header className="px-5 py-4 border-b border-gray-100">
                        <h2 className="font-semibold text-gray-800">
                          Add Friend
                        </h2>
                      </header>
                      <div className="p-4">
                        <div
                          className=" h-[210px] overflow-hidden hover:overflow-y-scroll"
                          id="scrollableDiv"
                        >
                          <InfiniteScroll
                            dataLength={friends.length}
                            loader={<Loading></Loading>}
                            scrollableTarget="scrollableDiv"
                          >
                            <table className="table-auto w-full">
                              <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                <tr>
                                  <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">
                                      Name
                                    </div>
                                  </th>

                                  <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">
                                      Interested
                                    </div>
                                  </th>
                                  <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-center">
                                      Status
                                    </div>
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="text-sm divide-y divide-gray-100">
                                {friends.length &&
                                  friends.map((friend) => (
                                    <CreateCommunityFriendList
                                      key={friend.id}
                                      friend={friend}
                                      addedFriendData={addedFriendData}
                                      setAddedFriendData={setAddedFriendData}
                                      countFriends={countFriends}
                                      setCountFriends={setCountFriends}
                                    ></CreateCommunityFriendList>
                                  ))}
                              </tbody>
                            </table>
                          </InfiniteScroll>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p
                    className={`mt-2 text-sm text-gray-500 ${
                      countFriends === 0 ? "block" : "hidden"
                    }`}
                  >
                    Add at least three of your friends
                  </p>

                  <p
                    className={`mt-2 text-sm text-gray-500 ${
                      countFriends === 1 ? "block" : "hidden"
                    }`}
                  >
                    You have added {countFriends} friend
                  </p>

                  <p
                    className={`mt-2 text-sm text-gray-500 ${
                      countFriends > 1 ? "block" : "hidden"
                    }`}
                  >
                    You have added {countFriends} friends
                  </p>
                </div>
              </div>

              <div>
                <div className="">
                  <h1 className="my-3">Set a group banner</h1>
                  <div class="image-preview-container">
                    <div class="preview">
                      <img
                        src={uploadImage}
                        alt="upload"
                        className={`${uploadImage ? "block" : "hidden"}`}
                        id="preview-selected-image"
                      />
                    </div>
                    <label>
                      Upload Image
                      <input
                        type="file"
                        id="file-upload"
                        accept="image/png , image/jpeg, image/webp"
                        onChange={previewImage}
                      />
                    </label>
                  </div>
                </div>

                <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
              </div>
            </div>

            <div className="bg-gray-50 px-10 py-8 sm:px-8 text-center">
              <input
                type="submit"
                onClick={() => handleCommunity(data1)}
                className="btn btn-outline btn-primary my-3 w-1/3 text-xl rounded-full text-black-600"
                disabled={isTrue}
                Value="Create Community"
              />
            </div>
          </div>
        </form>
        <Toaster />
      </div>
    </>
  );
}

export default CreateCommunity;
