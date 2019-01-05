import React, {  Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

  renderDish(dish) {
    if(dish != null) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return (
        <div></div>
      );
    }
  }

  renderComments(comments) {
    const selectedComments = comments.map((comment) => {
      return (
        <div key={comment.id}>
          <p>{comment.comment}</p>
          <p>-- {comment.author}, {comment.date}</p>
        </div>
      );
    });

    return selectedComments;
  }

  render() {
  
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.selectedDish)}
        </div>
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          {this.renderComments(this.props.selectedDish.comments)}
        </div>
      </div>
      
    )
  }
}

export default Dishdetail;
