import React, { useEffect, useState } from 'react';
import { Avatar, Col, Divider, List, Row, Skeleton } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import tw from "tailwind-styled-components"
import { UserAddOutlined } from '@ant-design/icons';

const Container = tw.div`
    overflow-auto
    px-0
    py-4
    shadow-lg
`
const AddMeContiner = tw.div`
    flex
    justify-between
    items-center
`


const UserCard = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const loadMoreData = () => {
        if (loading) {
            return;
        }
        setLoading(true);
        fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
            .then((res) => res.json())
            .then((body) => {
                setData([...data, ...body.results]);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    };
    useEffect(() => {
        loadMoreData();
    }, []);
    return (
        <Container
            id="scrollableDiv"
            style={{

                overflow: 'auto',
                padding: '0 16px',

            }}
        >

            <InfiniteScroll
                dataLength={data.length}
                next={loadMoreData}
                hasMore={data.length < 100}

                // loader={
                //     <Skeleton
                //         avatar
                //         paragraph={{
                //             rows: 1,
                //         }}
                //         active
                //     />
                // }
                endMessage={<Divider plain>No User Left</Divider>}
                scrollableTarget="scrollableDiv"
            >

                <List
                    grid={{
                        gutter: 5,
                        xs: 1,
                        sm: 2,
                        md: 2,
                        lg: 2,
                        xl: 2,
                        xxl: 2,
                    }
                    }
                    dataSource={data}
                    renderItem={(item) => (

                        <List.Item key={item.email}>

                            <List.Item.Meta
                                avatar={<Avatar size={50} src={item.picture.large} />}
                                title={
                                    <AddMeContiner >
                                        <a className="text-xl" href="https://ant.design">Sheikh Foysal</a>
                                        <div><UserAddOutlined style={{ fontSize: '20px', color: '#08c' }} /></div>
                                    </AddMeContiner>


                                }
                                description={
                                    <div >
                                        <div>
                                            Age: 25
                                        </div>
                                        <div>
                                            Address: Jamgora,Ashulia
                                        </div>
                                    </div >
                                }
                            />

                            <Divider />
                        </List.Item>




                    )}
                />

            </InfiniteScroll>

        </Container >
    );
};
export default UserCard;