import React,{useState}  from "react";
import myBackGround from './screen/image/logo.png'
import './screen/css/Index.css'
import ShortUrl from './Shorturl'
import Section from './section'
import List from './list'
export default function Navbar() {
    const [currentPage, setCurrentPage] = useState('home');
    return (<>
        <nav style={{
            display: 'flex', justifyContent: 'space-between'
        }}>
            <div className="Logo">
                <img src={myBackGround} alt="logo" />
                <h1>Short Url</h1>
            </div>
            <div className="contrainer">
                <ul className="list">
                    <li className={currentPage ==='home' ? 'listitemActive':'listitem'} onClick={()=>setCurrentPage('home')}>Home</li>
                    <li className={currentPage ==='Create Short url' ? 'listitemActive':'listitem'} onClick={()=>setCurrentPage('Create Short url')}>Create Short url</li>
                    <li onClick={()=>setCurrentPage('Short Link History')} className={currentPage ==='Short Link History' ? 'listitemActive':'listitem'} >Short Link History</li>
                </ul>
            </div>
        </nav >
        <div>
            {currentPage ==='home'?<Section/>:''}
            {currentPage ==='Create Short url'?<ShortUrl/>:''}
            {currentPage ==='Short Link History'?<List/>:''}
        </div>
        </>
    )
    
}
