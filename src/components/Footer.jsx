import React,  { Component } from 'react';
import Counter from './Counter';

class Footer extends  Component {
    render(){

        return (
            <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span>Copyright © Dashboard 2021</span>
                    </div>
                </div>
                {/* <Counter/> */}
            </footer>
        )

    }
}

export default Footer;