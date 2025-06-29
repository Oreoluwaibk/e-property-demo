import { Col, Layout, Row } from 'antd';
import Link from 'next/link';
import React from 'react'


const { Header, Footer } = Layout;
const WebsiteBg = () => {
  return (
    <Layout className="">
        {/* <Header className={variables.header}>
            <div className="bg-siteHeader h-10 w-full"></div>
            <div className={variables.headerBody}>
                <div className='flex gap-10'>
                    <Link href="/">
                        <Image 
                            src={ImoLogo}
                            alt='Imo Varsity'
                            className="bg-white"
                        />
                    </Link>
                    {!hideSearch && <Sitesearch />}
                    
                </div>
               
                
                <div className='flex gap-4'>
                   
                    <div className='flex items-center gap-6'>
                        <Link href="/" className='text-sm'>Home</Link>
                        <div  className='flex items-center gap-1'>
                            <div>
                                <Dropdown
                                    menu={{
                                        items: dropdownItem
                                    }}
                                    placement="bottom"
                                    className='dropdown_display'
                                >
                                    <div className='flex items-center gap-2 cursor-pointer'>
                                        <p className='text-sm'>Faculty</p>
                                        <DownOutlined className='cursor-pointer' />
                                    </div>
                                    
                                </Dropdown>
                            </div>
                        </div>
                        <Link href="/about-us" className='text-sm'>Why IMV</Link>
                        
                        <div className='flex items-center gap-2'>
                            {resourseElement && <Link href={`${resoursecTo}`}>{resourseElement}</Link>}
                            {!resourseElement && <Dropdown
                                menu={{
                                    items: dropdownItem2
                                }}
                                placement="bottom"
                                className='dropdown_display'
                            >    
                                <div className='flex items-center gap-2 cursor-pointer'>
                                    <p className='text-sm'>
                                        Resources
                                    </p>
                                    <DownOutlined className='cursor-pointer' />
                                </div>
                            </Dropdown>}
                        </div>
                        
                        <Link href="/imv-business" className='text-sm'>IMV Business</Link>
                    </div>
                </div>
               
                <div className='flex items-center gap-5'>
                    {!isAuthenticated && <Link href={`${redirect ? "/auth/signin" : "/student/login"}`}>
                        <Button 
                            className="flex items-center justify-center rounded-none font-bold text-base"
                            style={{height:40, width:100}}
                            // onClick={() => redirect ? router.push("/auth/signin") : router.push("/student/login")}
                        >
                            Login
                        </Button>
                    </Link>}
                    {isAuthenticated && <Link href={`${loginType === "student" ? "/student/dashboard" : "/dashboard"}`}>
                        <Button 
                            className="flex items-center justify-center rounded-none font-bold text-base"
                            style={{height:40, minWidth:100}}
                            type="primary"
                        >
                            Dashboard
                        </Button>
                    </Link>}
                   
                    {!isAuthenticated && <Link href={`${redirect ? "/auth/signup" : "/student/sign-up"}`}>
                        <Button 
                            type="primary" 
                            className="flex items-center justify-center gap-2 rounded-none font-bold text-base"
                            style={{height:40, width:100}}
                            // onClick={() => redirect ? router.push("/auth/signup") : router.push("/student/sign-up")}
                        >
                            Register
                        </Button>
                    </Link>}
                    {isAuthenticated && <Button 
                        className="flex items-center justify-center rounded-none font-bold text-base"
                        style={{height:40, minWidth:100}}
                        loading={loading}
                        onClick={handleLogout}
                    >
                        Logout
                    </Button>}
                   
                </div>
            </div>
            {!showMobileSearch && <div className='flex items-center justify-between w-full px-6 md:hidden'>
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
            </div>}
            
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
        <Footer className="">
            <Row>
                <Col lg={6} sm={24} xs={24} className='flex flex-col items-center md:items-start md:justify-start justify-center md:mb-0 mb-10 mt-4'>
                    <Link href="/">
                        <Image 
                            src={LogoNoBg}
                            alt='Imo Varsity'
                            style={{ marginTop:-86}}
                            className="md:ml-[-25px]"
                        />
                    </Link>
                    

                    <div className="flex items-center gap-2 ml-3"  style={{ marginTop:-50}}>
                        <Link href={"https://www.linkedin.com/company/imo-varsity"}><LinkedinFilled className="text-white text-2xl" /></Link> 
                        <Link href={"https://x.com/imovarsity"} ><TwitterOutlined className="text-white text-2xl" /></Link>
                        <Link href={"https://www.instagram.com/imovarsity"}><InstagramFilled className="text-white text-2xl" /></Link>
                        <Link href={"#"}><FacebookFilled className="text-white text-2xl" /></Link> 
                        <Link href={"https://www.tiktok.com/@imovarsity"}><TikTokFilled className="text-white text-2xl" /></Link>
                        
                    </div>
                </Col>

                <Col lg={4} sm={8} xs={8} className='flex flex-col items-center md:items-start'>
                    <span className='footer_head mb-3 inline-block'>Company</span>

                    <div className='flex flex-col gap-3 items-center md:items-start'>
                        <Link className='footer_link' href="/about-us">Why IMV</Link>
                        <Link className='footer_link' href="/imv-business">IMV Business</Link>
                        <Link className='footer_link' href="/contact-us">Contact</Link>
                    </div>
                </Col>
                <Col lg={4} sm={8} xs={8} className='flex flex-col items-center md:items-start'>
                    <span className='footer_head mb-3 inline-block'>Faculty</span>

                    <div className='flex flex-col gap-3 items-center md:items-start'>
                        <Link className='footer_link' href="/faculty/faculty-of-design">Design</Link>
                        <Link className='footer_link' href="/faculty/faculty-of-development">Development</Link>
                        <Link className='footer_link' href="/faculty/faculty-of-marketing">Marketing</Link>
                        <Link className='footer_link' href="/faculty/faculty-of-cybersecurity">Cybersecurity</Link>
                        <Link className='footer_link' href="/faculty/faculty-of-product">Product</Link>
                        <Link className='footer_link' href="/faculty/faculty-of-sales">Sales</Link>
                        <Link className='footer_link' href="/faculty/faculty-of-ai">AI</Link>
                        <Link className='footer_link' href="/faculty/faculty-of-data">Data</Link>
                        <Link className='footer_link' href="/faculty/faculty-of-cloud">Cloud</Link>
                    </div>
                </Col>
                <Col lg={4} sm={8} xs={8} className='flex flex-col items-center md:items-start'>
                    <span className='footer_head mb-3 inline-block'>Resources</span>

                    <div className='flex flex-col gap-3'>
                        <Link className='footer_link' href="#">Blog</Link>
                        <Link className='footer_link' href="/faqs">FAQs</Link>
                    </div>
                </Col>   
                <Col lg={6} sm={24} xs={24} className='flex flex-col md:items-start items-center md:my-0 mt-4 mb-2 pt-4 md:pt-0'>
                    <span className='up_to_date mb-3 inline-block'>Subscribe to our newsletter</span>

                    <Form layout="horizontal" className='flex items-center gap-2'>
                        <Form.Item>
                            <Input style={{height:44}} placeholder='Enter your email' />
                        </Form.Item>
                        <Form.Item>
                            <Button className='subscribe_btn'>Subscribe</Button>
                        </Form.Item> 
                    </Form>
                </Col>                
            </Row>
            <div className='text-white flex flex-col gap-6 md:gap-0 md:flex-row items-center justify-between px-4 pl-0 pr-0 border-t-[#475467] border-t md:pt-7 mt-1 md:mt-10'>
                <p>© 2024 IMO VARSITY. All rights reserved.</p>
                <div className="flex items-center gap-2">
                    <Link href="/terms">Terms</Link>
                    <Link href="/privacy">Privacy</Link>
                    <Link href="/cookies">Cookies</Link>
                </div>
            </div>
        </Footer> */}
    </Layout>
  )
}

export default WebsiteBg