import './CommentItem.scss'

import React from 'react'

import { connect } from 'react-redux'

import StarScore from 'component/StarScore/StarScore'
/**
 * 评论单页组件
 * @description <CommentItem />
 */
class CommentItem extends React.Component {
  renderImgs(item) {
    let imgs = item.comment_pics || []
    if (imgs.length) {
      return (
        <div className="img-content clearfix">
          {imgs.map((item, index) => {
            let src = item.url
            let style = {
              backgroundImage: 'url(' + src + ')',
            }
            return <div key={index} className={'img-item'} style={style} />
          })}
        </div>
      )
    } else {
      return null
    }
  }
  renderTags(label) {
    return label.map((item) => {
      return item.content + '，'
    })
  }
  formatTime(time) {
    let date = new Date(Number(time + '000'))

    return (
      date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate()
    )
  }

  render() {
    let item = this.props.data
    return (
      <div className="comment-item">
        <div className="comment-time">{this.formatTime(item.comment_time)}</div>
        <img
          className="avatar"
          src={
            item.user_pic_url ||
            '//s3plus.sankuai.com/v1/mss_00c90c47614241978d32cca9bc6e44a4/h5i/userpic_defalut.c741e924.png'
          }
        />
        <div className="item-right">
          <p className="nickname">{item.user_name}</p>
          <div className="star-and-time">
            <div className="star-content">
              <StarScore score={item.order_comment_score} />
            </div>
            <div className="send-time">{item.ship_time + '分钟送达'}</div>
          </div>
          <div className="comment-text">{item.comment}</div>
          {this.renderImgs(item)}
          {item.praise_food_tip ? (
            <div className="like-info">{item.praise_food_tip}</div>
          ) : null}
          {item.comment_labels.length ? (
            <div className="tag-info">
              {this.renderTags(item.comment_labels)}
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}

export default connect()(CommentItem)
