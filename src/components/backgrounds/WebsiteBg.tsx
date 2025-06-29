import { Button, Col, Form, Input, Layout, Row, Tooltip } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode, useEffect, useState } from 'react'
import { Logo } from '../../../assets';
import { FacebookFilled, InstagramFilled, LinkedinFilled, SearchOutlined, TikTokFilled, TwitterOutlined, UpCircleFilled } from '@ant-design/icons';


const { Header, Footer } = Layout;
const WebsiteBg = ({ children }: { children: ReactNode}) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
    };
    
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
          window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  return (
    <Layout className="">
        <Header className="bg-background !md:h-[140px] !min-h-[200px] !pb-6 md:pb-0" style={{display: "flex", alignItems: "center", width: "100%"}}>
            <div className="flex flex-col md:flex-row items-center justify-between md:h-10 h-full w-full">
                <div className='flex gap-10 items-center'>
                    <Link href="/">
                        <Image 
                            src={Logo}
                            alt='Imo Varsity'
                            className="bg-white"
                            style={{width: 120, height: 40}}
                        />
                    </Link>
                    <div>
                        <Input prefix={<SearchOutlined />} placeholder='Search...' style={{height: 40}} />
                    </div> 
                   
                </div>
               
                
                <div className='flex gap-4 !md:ml-[-80px]'>
                     <div className='flex items-center md:gap-16 gap-4 text-xl'>
                        <Link href="/" className='text-lg'>Home</Link>
                        
                        <Link href="#" className='text-lg'>About</Link>
                        
                        <Link href="#" className='text-lg'>Services</Link>
                    </div>
                </div>
               
                <div className='flex items-center gap-5'>
                    <Button 
                        className="flex items-center justify-center rounded-none font-bold text-base"
                        style={{height:50, width:150}}
                        // loading={loading}
                        // onClick={handleLogout}
                    >
                        Contact Us
                    </Button>
                </div>
            </div>
            {/* {!showMobileSearch && <div className='flex items-center justify-between w-full px-6 md:hidden'>
                <MenuOutlined className='text-[24px] cursor-pointer' onClick={() => setShowDrawer(true)} />
                <Link href="/">
                    <Image 
                        src={ImoLogo}
                        alt='Imo Varsity'
                        className="bg-white"
                    />
                </Link>
                <div className='border rounded-[100px] h-12 w-12 flex items-center justify-center '>
                    <SearchOutlined className='text-[24px]' onClick={() => setShowMobileSearch(true)} />
                </div>
                
            </div>}

            {showMobileSearch && <div className='flex items-center gap-2 pb-4'>
                <Sitesearch />
                <CloseOutlined className='text-[20px]' onClick={() => setShowMobileSearch(false)}/>
            </div>} */}
            
        </Header>
        <Layout className='bg-white relative'>
            {children}
            {isVisible && <Tooltip title="Scroll to top" style={{ backgroundColor: "transparent"}}>
                <UpCircleFilled 
                    className='text-pBlue cursor-pointer text-4xl fixed bottom-[90px] right-[40px] md:bottom-[30px] md:right-[90px] z-10 bg-white'
                    style={{ backgroundColor: "transparent"}}
                    onClick={scrollToTop}
                />
            </Tooltip>}
           
        </Layout>
        <Footer className="bg-background pb-10" style={{padding: 0}}>
            <Row className="bg-background" style={{padding: "40px 0"}}>
                <Col lg={6} sm={24} xs={24} className='!flex flex-col items-center md:items-start md:justify-start justify-center md:mb-0 mb-10 mt-4'>
                    <Link href="/">
                        <Image 
                            src={Logo}
                            alt='Imo Varsity'
                            style={{width: 120, height: 40}}
                            className='ml-3'
                        />
                    </Link>
                    

                    <div className="flex items-center gap-2 ml-3"  style={{ marginTop: 50}}>
                        <Link href="#"><LinkedinFilled className="text-white text-2xl" /></Link> 
                        <Link href="#" ><TwitterOutlined className="text-white text-2xl" /></Link>
                        <Link href="#"><InstagramFilled className="text-white text-2xl" /></Link>
                        <Link href="#"><FacebookFilled className="text-white text-2xl" /></Link> 
                        <Link href="#"><TikTokFilled className="text-white text-2xl" /></Link>
                        
                    </div>
                </Col>

                <Col lg={4} sm={8} xs={8} className='!flex flex-col items-center md:items-start'>
                    <p className='text-[#F2F4F7] mb-4 text-lg'>Company</p>

                    <div className='!flex flex-col gap-3 items-center md:items-start'>
                        <Link className='footer_link' href="#">Landlords</Link>
                        <Link className='footer_link' href="#">Tenants</Link>
                        <Link className='footer_link' href="#">Agents</Link>
                        <Link className='footer_link' href="#">Artisans</Link>
                    </div>
                </Col>
                <Col lg={4} sm={8} xs={8} className='!flex flex-col items-center md:items-start'>
                    <p className='text-[#F2F4F7] mb-4 text-lg'>Discover</p>

                    <div className='!flex flex-col gap-3 items-center md:items-start'>
                        <Link className='footer_link' href="#">Locations</Link>
                        <Link className='footer_link' href="#">Real Estate News</Link>
                        <Link className='footer_link' href="#">Trending</Link>
                        <Link className='footer_link' href="#">Marketing</Link>
                        <Link className='footer_link' href="#">Survey</Link>
                    </div>
                </Col>
                <Col lg={4} sm={8} xs={8} className='!flex flex-col items-center md:items-start'>
                    <p className='text-[#F2F4F7] mb-4 text-lg'>Resources</p>

                    <div className='!flex flex-col gap-3'>
                        <Link className='footer_link' href="#">Blog</Link>
                        <Link className='footer_link' href="#">FAQs</Link>
                    </div>
                </Col>   
                <Col lg={6} sm={24} xs={24} className='!flex flex-col md:items-start items-center md:my-0 mt-4 mb-2 pt-4 md:pt-0'>
                    <span className='up_to_date mb-3 inline-block'>Subscribe to our newsletter</span>

                    <Form layout="horizontal" className='!flex items-center gap-2'>
                        <Form.Item>
                            <Input style={{height:44}} placeholder='Enter your email' />
                        </Form.Item>
                        <Form.Item>
                            <Button className='subscribe_btn'>Subscribe</Button>
                        </Form.Item> 
                    </Form>
                </Col>                
            </Row>
            <div className='bg-background text-white flex flex-col gap-6 md:gap-0 md:flex-row items-center justify-between px-10 py-6 border-t-[#475467] border-t'>
                <p>Copyright © 2025 - ePropertyTree. All rights reserved.</p>
                <div className="flex items-center gap-2">
                    <Link href="#">Terms</Link>
                    <Link href="#">Privacy</Link>
                    <Link href="#">Cookies</Link>
                </div>
            </div>
        </Footer>
    </Layout>
  )
}

export default WebsiteBg