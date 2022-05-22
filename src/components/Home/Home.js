import React from 'react';
import './home.css';

function Home() {
  return (
    <div className='mainHome'>
        <div className='mainLeft'>
            <div className='imageBox'>
                <img src={require('../../images/owl.jpg')} className="rounded mx-auto d-block" id='profileImage' alt="..."></img>
            </div>
            <div className='downloadDiv'>
                <button type="button" className="btn btn-danger"><a href="#">Download</a></button>
            </div>
        </div>
        <div className='mainRight'>
            <div className='socialMedia'>
                <ul className='socialList'>
                    <li>
                        <a target={"_blank"} href='https://www.linkedin.com/in/vikramsinghboran/'>
                            <img src={require('../../images/linkedIn.gif')}></img>
                        </a>
                    </li>
                    <li>
                        <a target={"_blank"} href='https://github.com/VikramSinghBoran'>
                            <img src={require('../../images/git.gif')}></img>
                        </a>
                    </li>
                    <li>
                        <a target={"_blank"} href='https://www.hackerrank.com/CodeWithVik'>
                            <img src={require('../../images/hackerrank.png')}></img>
                        </a>
                    </li>
                    <li>
                        <a target={"_blank"} href='https://leetcode.com/vikramsinghboran98/'>
                            <img src={require('../../images/leetcode.png')}></img>
                        </a>
                    </li>
                    <li>
                        <a target={"_blank"} href='https://www.hackerearth.com/@vikramsinghboran98'>
                            <img src={require('../../images/hackerearth.png')}></img>
                        </a>
                    </li>
                    
                
                </ul>
            </div>
            <div className='introDiv'>
                <div className='jobProfile'>
                    <h3 className="text-decoration-line-through">Developer</h3>
                    <h1 className="text-decoration-underline">Full Stack Developer</h1>
                </div>
                <div className='name'>
                    <h2>Vikram Singh Boran</h2>
                    <p>This is under developement right now by the way! Updates will be better.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home;