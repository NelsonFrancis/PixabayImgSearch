import React, { Component } from 'react'
import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import ZoomIn from 'material-ui/svg-icons/action/zoom-in'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

export class ImageResults extends Component {
  state = {
    open: false,
    currentImg: ''
  }
  handleOpen = (img) => {
    this.setState({
      open: true,
      currentImg: img
    })
  }
  handleClose = () => {
    this.setState({
      open: false
    })
  }
  render() {
        let imageListContent
        const {images} = this.props
        if(images){
          imageListContent = (
            <GridList cols={3}>
              {
                images.map(img => (
                  <GridTile title={img.tags} key={img.id} subtitle={<span>by {img.user}</span>} actionIcon={<IconButton onClick={() => this.handleOpen(img.largeImageURL)}><ZoomIn color="white" /></IconButton>}>
                    <img src={img.largeImageURL} alt="img" />
                  </GridTile>
                ))
              }
            </GridList>
          )
        }else{
          imageListContent = null
        }
        const action = [
          <FlatButton label="close" primary={true} onClick={this.handleClose}/>
        ]
      return (
        <div>
          {imageListContent}
          <Dialog actions={action} modal={false} open={this.state.open} onRequestClose={this.handleClose}>
            <img src={this.state.currentImg} alt="img" style={{width: '100%'}} />
          </Dialog>
        </div>
    )
  }
}

export default ImageResults
