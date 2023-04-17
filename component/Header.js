import React, { useState } from 'react';
import Styles from '../styles/header.module.scss';
import Image from 'next/image';


import { BsSliders , BsCalendar2 , BsChatLeftText , BsChatRight , BsFillBackspaceFill, BsEmojiSmile } from 'react-icons/bs';
import { RiNewspaperLine , RiGroupLine } from 'react-icons/ri';
import { AiOutlineStar } from "react-icons/ai";
import { SlMusicToneAlt } from 'react-icons/sl';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { CgCommunity } from 'react-icons/cg';
import { FaBirthdayCake } from 'react-icons/fa';
import { BiStats , BiSearchAlt } from 'react-icons/bi';
import { TfiCommentsSmiley } from 'react-icons/tfi';
import { FiZap } from 'react-icons/fi';
import { CiMenuKebab , CiSearch} from 'react-icons/ci';
import { ST } from 'next/dist/shared/lib/utils';

const Header = () => {
    const [showModal , setShowModal] = useState(false);
    const [showSecondModal, setShowSecondModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [showFace , setShowFace] = useState(false);
    const [showChat , setShowChat] = useState(false);
    const [showNot , setShowNot] = useState(false)

    const Data = [
        {
            id : 1,
            imgSrc : '/avatar62-sm.webp',
            icon : <BsSliders/>,
            name : 'collapse menue',
        },
        {
            id : 2,
            imgSrc : '/avatar63-sm.webp',
            icon : <RiNewspaperLine/>,
            name : 'newsfeed',
        },
        {
            id : 3,
            imgSrc: '/avatar67-sm.webp',
            icon : <AiOutlineStar/>,
            name :'fav pages feed',
        },
        {
            id : 4,
            imgSrc: '/avatar68-sm.webp',
            icon : <RiGroupLine/>,
            name : 'friend groups'
        },
        {
            id : 5,
            imgSrc: '/avatar69-sm.webp',
            icon : <SlMusicToneAlt/>,
            name : 'music & playlist',
        },
        {
            id : 6,
            imgSrc: '/avatar70-sm.webp',
            icon : <TiWeatherPartlySunny/>,
            name : 'weather app',
        },
        {
            id : 7,
            imgSrc: '/avatar71-sm.webp',
            icon : <BsCalendar2/>,
            name :'calender and event',
        },
        {
            id : 8,
            imgSrc: '/avatar72-sm.webp',
            icon : <CgCommunity/>,
            name : 'community badges',
        },
        {
            id : 9,
            imgSrc: 'avatar71-sm.webp',
            icon : <FaBirthdayCake/>,
            name : 'friends birthdays',
        },
        {
            id : 10,
            imgSrc: '/avatar72-sm.webp',
            icon : <BiStats/>,
            name : 'account stats',
        }
    ]

    const srchData = [
        {
            id : 1,
            imgSrc: 'avatar54-sm.jpg',
            user:"marie clair steven",
            friends:"12 matual friends",
            post:"Hi James! It's Diana, I just wanted to let you know that we have to reschedule..."
        },
        {
            id : 2,
            imgSrc: 'avatar40-sm.webp',
            user:"dave marinar",
            friends:"1 matual friends",
            post:"Great, I’ll see you tomorrow!."
        },
        {
            id : 3,
            imgSrc: 'avatar64-sm.webp',
            user:"marina polson",
            friends:"7 matual friends",
            post:"We’ll have to check that at the office and see if the client is on board with..."
        },
        {
            id : 4,
            imgSrc: 'avatar69-sm.webp',
            user:"the marina bar",
            friends:"5 matual friends",
            post:"Yeah! Seems fine by me!"
        },
    ]

    const handelSearch = (e) => {
        setSearchQuery(e.target.value);
    }
   /*const filteredResults = srchData.filter(
        (item) =>item.user.toLowerCase().includes(searchQuery.toLowerCase()) ||item.toLowerCase().includes(searchQuery.toLowerCase())
    );*/

return (
    <>
    <section className={Styles.navbar}>
    <div className={Styles.header} >
        <Image className={Styles.img1} src="/logo.webp" width={50}
        height={50}/>
        <h1>Fav Pages Feed</h1>
        <input 
        onChange={handelSearch} 
        onClick={()=>setSearchQuery(true)} 
        type="text" placeholder="Search here people or pages..." style={{ width: "25rem" }} className="h-16 bg-gray-600 pl-3 text-xs py-6 w-86" />

        {/*third modal*/}
        {searchQuery ? (
        <div className={Styles.msrch}>
        {srchData.map((item) => {
            return(
           
              <div className={Styles.mmthird}>  <ul key={item.id}>
              <li><img src={item.imgSrc}/></li>
              <li>
                <h3 className=' font-bold text-sm'>{item.user}</h3>
                <p className='text-xxxs text-gray-800 pt-1'>{item.friends}</p>
              </li>
            </ul>
            <p className='pl-20'><BsEmojiSmile className={Styles.micon}/></p>
            </div>  
        
        )})}
</div>  ) : null}
        

        {/*filteredResults.map((item) => (
            <div className={Styles.msrch}>
                <ul key={item.id}>
            <li><img src={item.imgSrc}/></li>
            <li>
              <h3 className=' font-bold text-sm'>{item.user}</h3>
              <p className='text-xxxs text-gray-800 pt-1'>{item.friends}</p>
            </li>
            <li className='pl-20'><BsEmojiSmile className={Styles.micon}/></li>
          </ul>
            </div>
                ))*/}
        <p className={Styles.icon1}><BiSearchAlt/></p>
        <a  className={Styles.a1} href='#'>find friends</a>

        <div className={Styles.icons1}>
        <a href='#' onMouseOver={()=>setShowFace(true)}onMouseLeave={()=>setShowFace(false)}><TfiCommentsSmiley/></a>
        <a href='#' className={Styles.icons11}><BsChatLeftText onMouseOver={()=>setShowChat(true)}onMouseLeave={()=>setShowChat(false)}/></a>
        <a href='#'  className={Styles.icons12}><BsChatRight onMouseOver={()=>setShowChat(true)}onMouseLeave={()=>setShowChat(false)}/></a>
        <a href='#'><FiZap onMouseOver={()=>setShowNot(true)}onMouseLeave={()=>setShowNot(false)}/></a>
        </div>
        <div className={Styles.user1}>
        <Image src="/author-page.webp" width={50}
        height={50}/>
        <div>
        <h3>james spiegel</h3>
        <p>spacw cowboy</p>
        </div>
        <a href='#'></a>
        </div>
        </div>
        <section className={Styles.sideBar}>
        <div className={Styles.iconsb}>
        {
                Data.map(({id,icon}) => {
                    return(
                        <ul key={id} >
                       
                        <li><a href='#' onClick={()=>setShowSecondModal(true)}>{icon}</a></li>
                    </ul>
                    )
                })
            }
        </div>
        <div className={Styles.rightSb}>
            {
                Data.map(({id,imgSrc}) => {
                    return(
                        <ul key={id} className="card activeContent" >
                        {}
                        <li><a href='#'><img src={imgSrc} alt="" onClick={()=>setShowModal(true)} /></a></li>
                    </ul>
                    )
                })
            }
            <a href='#' className={Styles.ricon}>< BsSliders/></a>
            <button className={Styles.rbtn}><BsChatLeftText/></button>
        </div>
    </section>
    </section>



    {/*frist model*/}
    {showModal ? (
        <div className={Styles.modal1}>
            <div className={Styles.mnav}>
                <h4>chat</h4>
                    <p><CiMenuKebab/></p>
                    <button className={Styles.btn1m} onClick={() => setShowModal(false)}><BsFillBackspaceFill/></button>
            </div>
            <div className={Styles.mbody}>
                <div>
                    <img src='/avatar62-sm.webp'/>
                </div>
                <div className={Styles.mb}>
                    <p>Hi James! Please remember to buy the food for tomorrow! I'm gonna be handling the gifts and Jake's gonna get the drinks...</p>
                </div>
            </div>    
            <span>Yesterday at 8:10pm</span>
            <div className={Styles.mfoot}>
            <input type="text" name='text' id='text' placeholder='Press enter to post...'/>
            </div>
        </div>
        ) : null}
        {/*second modal*/}
        {showSecondModal ? (
        <div className={Styles.modal2}>
            <div className={Styles.mnav2}>
                    <img src='/logo.webp'/>
                    <p>olympus</p>
                    <button className={Styles.btn1m} onClick={() => setShowSecondModal(false)}><BsFillBackspaceFill/></button>
            </div>
            <div className={Styles.mbody}>
            {
                Data.map(({id,icon,name}) => {
                    return(
                        <ul key={id} className="card activeContent" >
                        
                        <li><a href='#'>{icon}</a><p>{name}</p></li>
                    </ul>
                    )
                })
            }
            </div>
        </div>
        ) : null}

        {/* forth modal */}
        {showFace ? (
            <div className={Styles.face}>
            <div className={Styles.fnav}>
                <p>chat/message</p>
                <div>
                    <p>setting</p>
                    <p>make all as read</p>
                </div>
            </div>
            <div className={Styles.mFace}>
            {
                srchData.map((item) => {
                    return(
                        <ul key={item.id} className="card activeContent" >
                            <li><img src={item.imgSrc}/></li>
                        <li><h3>{item.user}</h3>
                        <p>{item.friends}</p>
                        </li>
                    </ul>
                    )
                })
            }
            </div>
            <button>check all your events</button>
            </div>
        ) : null}

        {/* fifth modal */}
        {showChat ? (
            <div className={Styles.chat}>
            <div className={Styles.cnav}>
                <p>chat/message</p>
                <div>
                    <p>setting</p>
                    <p>make all as read</p>
                </div>
            </div>
            <div className={Styles.mchat}>
            {
                srchData.map((item) => {
                    return(
                        <ul key={item.id} className="card activeContent" >
                            <li><img src={item.imgSrc}/></li>
                        <li><h3>{item.user}</h3>
                        <p>{item.post}</p>
                        </li>
                    </ul>
                    )
                })
            }
            </div>
            <button>view all messages</button>
            </div>
        ) : null}

        {/* six modal */}
        {showNot ? (
            <div className={Styles.not}>
            <div className={Styles.nnav}>
                <p>chat/message</p>
                <div>
                    <p>setting</p>
                    <p>make all as read</p>
                </div>
            </div>
            <div className={Styles.mchat}>
            {
                srchData.map((item) => {
                    return(
                        <ul key={item.id} className="card activeContent" >
                            <li><img src={item.imgSrc}/></li>
                        <li><h3>{item.user}</h3>
                        <p>{item.post}</p>
                        </li>
                    </ul>
                    )
                })
            }
            </div>
            <button>view all notification</button>
            </div>
        ) : null}
    </>
)
}

export default Header