import React from 'react'
import Image from 'next/image';
import Style from '../styles/content.module.scss'
import { CiMenuKebab } from 'react-icons/ci';
import { AiOutlineStar } from "react-icons/ai";
import { VscReactions } from 'react-icons/vsc';
import { BsCamera,BsStar } from 'react-icons/bs' 
 import { BiMessageDetail } from 'react-icons/bi' 
 import { TbArrowsExchange } from 'react-icons/tb'
 import { SlHeart } from 'react-icons/sl'
const Content = () => {

    const sData = [
        {
            id:1,
            name:"Francine smith",
            imgSrc:'/avatar38-sm.webp',
            common:"8 friends in common"
        },
        {
            id:2,
            name:"hugh wilson",
            imgSrc:'/avatar39-sm.webp',
            common:"6 friends in common"
        },
        {
            id:3,
            name:"karen masters",
            imgSrc:'/avatar40-sm.webp',
            common:"6 friends in common"
        }
    ]

    const sPages = [
        {
            id:1,
            pName:"the marina bar",
            img:"/avatar41-sm.webp",
            kind:"restaurant/ bar"
        },
        {
            id:2,
            pName:"tapronous rock",
            img:"/avatar42-sm.webp",
            kind:"rock band"
        },
        {
            id:3,
            pName:"pixeles'd design",
            img:"/avatar43-sm.webp",
            kind:"company"
        },
        {
            id:4,
            pName:"thomps custom ",
            img:"/avatar44-sm.webp",
            kind:"clothing store"
        },
        {
            id:5,
            pName:"crimson agency",
            img:"/avatar45-sm.webp",
            kind:"company"
        },
        {
            id:6,
            pName:"manneque angel",
            img:"/avatar46-sm.webp",
            kind:"clothing store"
        }
    ]

    const posts = [
        {
            id:1,
            name:"james spiegel",
            uImg:"/author-page.webp",
            last:"7 hour ago",
            post:"Check out the GIF of our photoshoot from the other day",
            video:"/static/videos/post_video.mp4",
            like:"15",
            share:"0",
            comment:"16"
        },
        {
            id:2,
            name:"tapronous rock",
            uImg:"/avatar42-sm.webp",
            last:"54mins ago",
            post:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consequat.",
            like:"24",
            share:"24",
            comment:"17"
        },
        {
            id:3,
            name:"james spiegel",
            uImg:"/author-page.webp",
            last:"38 mins ago",
            post:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium der doloremque laudantium.",
            like:"3",
            share:"0",
            comment:"1"
        },
        {
            id:4,
            name:"mathilda brinker",
            uImg:"/avatar42-sm.webp",
            last:"1 hour ago",
            post:"Ratione voluptatem sequi en lod nesciunt. Neque porro quisquam est, quinder dolorem ipsum quia dolor sit amet, consectetur adipisci velit en lorem ipsum duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
            like:"8",
            share:"0",
            comment:"1"
        },
        {
            id:5,
            name:"blue whale pizza",
            uImg:"/avatar43-sm.webp",
            last:"7 hour ago",
            post:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia erunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
            imgs:"/post-photo2.webp",
            like:"0",
            share:"16",
            comment:"0"
        },
        {
            id:5,
            name:" Green Goo Rock",
            uImg:"/avatar63-sm.webp",
            last:"march 8 at 6:42pm",
            post:"Hey guys! We are gona be playing this Saturday of The Marina Bar for their new Mystic Deer Party. If you wanna hang out and have a really good time, come and join us. We’l be waiting for you!",
            imgs:"/post__thumb1.webp",
            like:"49",
            share:"37",
            comment:"264"
        }
    ]

    const images = [
        {
            id:1,
            src:"/avatar38-sm.webp"
        },
        {
            id:2,
            src:"/avatar39-sm.webp"
        },
        {
            id:3,
            src:"/avatar40-sm.webp"
        },
        {
            id:4,
            src:"/avatar41-sm.webp"
        },
        {
            id:5,
            src:"/avatar42-sm.webp"
        },
        {
            id:6,
            src:"/avatar44-sm.webp"
        },
        {
            id:7,
            src:"/avatar45-sm.webp"
        },
        {
            id:8,
            src:"/avatar46-sm.webp"
        },
        {
            id:9,
            src:"/avatar62-sm.webp"
        }
    ]

  return (
   <>
   <section className={Style.content}>
        <div className={Style.friend}>
        <div className={Style.divf1}> 
            <p>friend suggestion</p>
            <a><CiMenuKebab/></a>
            </div>
            {
                sData.map((item)=>{
                    return(
                        <div key={item.id} className={Style.divf2}> 
            <img src={item.imgSrc}/>
            <div>
            <h4>{item.name}</h4>
            <p>{item.common}</p>
            </div>

            <p><VscReactions className={Style.icon}/></p>
            </div>
                    )
                })
            }
        </div>
    </section>
    <section className={Style.data2}>
    <div className={Style.friend1}>
        <div className={Style.divf11}> 
            <p>pages you may like</p>
            <a><CiMenuKebab/></a>
            </div>

            {
                sPages.map((items)=>{
                    return(
                        <div key={items.id} className={Style.divf12}> 
            <img src={items.img}/>
            <div>
            <h4>{items.pName}</h4>
            <p>{items.kind}</p>
            </div>

            <p><AiOutlineStar className={Style.icon1}/></p>
            </div>
                    )
                })
            }
            </div>
    </section>
    <section className={Style.content2}>
        <div className={Style.hello}>
            <button><AiOutlineStar className={Style.iconh1}/></button>
            <p>Here you’ll see the recent updates of your Fav Pages</p>
        </div>
        {
            posts.map((data) => {
                return(
                    <div key={data.id} className={Style.posts}>
                        <div className={Style.shared}>
                        <button><SlHeart/></button>
                        <button><BiMessageDetail/></button>
                        <button><TbArrowsExchange/></button>
                    </div>
            <div className={Style.card}>
                <div className={Style.puser}>
                   <div className={Style.unav}>
                   <img src={data.uImg}/>
                   <div> 
                    <h4>{data.name}</h4>
                    <p>{data.last}</p>
                    </div>
                    <div className={Style.icon}>
                        <p><CiMenuKebab/></p>
                    </div>
                   </div>
                </div>
                <div className={Style.userPost}>
                <p className={Style.upost}>{data.post}</p>
                {/*https://html.crumina.net/html-olympus/16-FavPagesFeed.html*/}
                {
                    data.video? (
                        <video autoPlay loop width="500px">
                <source src={data.video} type='video/mp4'/>
                </video>
                    ) : (<></>)
                }

                {
                    data.imgs? (
                        <img src={data.imgs}/>

                    ) : (<></>)
                }
                
                

                </div>
                <div className={Style.userFoot}>
                    <div className={Style.ff1}>
                        <p><SlHeart/>{data.like}</p>
                    </div>
                    <div className={Style.fimg}>
                        <img src='/friend-harmonic2.webp'/>
                        <img src='/friend-harmonic5.webp'/>
                        <img src='/friend-harmonic7.webp'/>
                        <img src='/friend-harmonic8.webp'/>
                        <img src='/friend-harmonic5.webp'/>
                        <p>Diana, Nicholas and
                        47 more liked this</p>
                    </div>
                    <div className={Style.ficons}>
                        <p><BiMessageDetail/> {data.comment}</p>
                        <p><TbArrowsExchange/> {data.share}</p>
                    </div>
                </div>
            </div>
        </div>
                )
            })
            }
            <button className={Style.new}>...</button>
    </section>
    <section className={Style.rcont}>
        <div className={Style.rnav}>
            <p><BsStar/></p>
            <span>...</span>
        </div>
        <div className={Style.conn}>
            <p>Be like them and</p>
            <span>Create your own Favourite Page!</span>
            <button>start now</button>
        </div>
    </section>
    <section className={Style.last}>
        <div className={Style.n11}>
            <h4>your fav pages</h4>
            <p>...</p>
        </div>
        <div>
            {
                images.map((img) => {
                    return(
                        <img key={img.id} src={img.src}/>
                    )
                })
            }
        </div>
    </section>
    </>
    )
}

export default Content