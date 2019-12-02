import React from 'react';
import BackArrow from './LeftArrow.js';
import NextArrow from './RightArrow.js';


class Slideshow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: [require('./img/image1.jpg'),
                    require('./img/image2.jpg'),
                    require('./img/image3.jpg'),
                    require('./img/image4.jpg'),
                    require('./img/image5.jpg')
                    ],
            slideCount: 0
        };
    }

    render = () => {
        return (
            <div>
                
                    <div
                    style={{left: "10px", position: "relative"}}>
                        
                        
                        {this.state.slideCount !== 0 ? <BackArrow previousImage={this.previousImage}/> : ''} 

                        {this.state.slideCount !== (this.state.photos.length - 1) ? <NextArrow nextImage={this.nextImage}/> : ''}
                      
                        <div> 
                            {this.state.photos.map((photo, key) => {
                                if (this.state.photos.indexOf(photo) === this.state.slideCount) {
                                    return (
                                        <div key={photo}>
                                        <img src={photo} alt="food"/>
                                        </div>
                                        )
                                }
                                return ''
                            })}
                        </div>
                        
                    </div>
                 

                <div>
                    {console.log(this.state.photos[0])}
                </div>
            </div>
        );
    }

    nextImage = () =>{
        this.setState({ slideCount: this.state.slideCount + 1 })
  }

    previousImage = () =>{
        this.setState({ slideCount: this.state.slideCount - 1 })
  }

}

export default Slideshow;
