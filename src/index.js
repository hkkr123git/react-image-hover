import React from 'react';
import effects from './effects';
import './index.css';
import './effects.css';

class ImageContentHover extends React.Component {

    render() {
        const {image, content, tileWidth, tileHeight, effect, className} = this.props;
        const classNameText = 'image-container '+(className || '');
        return (
            <div className={classNameText} style={{width: tileWidth, height: tileHeight}}
                onMouseOver={(e) => {
                    this.onImgMouseOver(e, effect);
                }}
                onMouseOut={(e) => {
                    this.onImgMouseOut(e, effect);
                }}>
                <img src={image} style={{width: tileWidth, height: tileHeight}} />
                <div className="hover-content" 
                    ref={(ref) => this.hoverRef = ref}>
                    <div className="title">{content.title || ''}</div>
                    <div className="body">{content.body || ''}</div>
                </div>
            </div>
        );
    }

    onImgMouseOver(event, effect) {
        if (this.hoverRef && this.hoverRef.classList) {
            this.hoverRef.classList.remove(effects[effect]);
            this.hoverRef.classList.add(effect);    
        }
        event.stopPropagation();
        event.preventDefault();
    }

    onImgMouseOut(event, effect) {
        if (this.hoverRef && this.hoverRef.classList) {
            this.hoverRef.classList.add(effects[effect]);    
            this.hoverRef.classList.remove(effect);
        }
        event.stopPropagation();
        event.preventDefault();
    }
}
export default ImageContentHover;