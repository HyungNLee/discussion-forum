import React from 'react';
//import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Body from './Body';

/*
  import { Link } from 'react-router-dom';
  <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
*/

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterPostList: [
        {
          postOwner: "StrungCheese",
          title: "Mel's cheese factory",
          postBody: 'Mel likes cheese. Do you like cheese?',
          upVotes: 1000,
          comments: [
            {
              commentOwnerName: 'Ryan Hikaru',
              commentContent: 'Wow I like cheese too! Lets be cheese friends!',
              commentUpvotes: -10
            },
            {
              commentOwnerName: 'Elton',
              commentContent: "He is already my cheese friend. He can't be your cheese friend too.",
              commentUpvotes: 500
            }
          ],
          postId: 0
        },
        {
          postOwner: "IHateMicrosoftSculptErgonomicKeyboard",
          title: "Broken Ryan and other concerning developments at Epicodus",
          postBody: "Ryan is becoming a real teenager. I'm really concerned for his mental health because his teenager slangs are destroying his friendships. If anyone has any suggestions for helping Ryan, please contact Kenneth. DATTEBAYO!",
          upVotes: 2,
          comments: [
            {
              commentOwnerName: 'Kenneth-san',
              commentContent: 'I think Ryan is becoming a real awesome guy and I like the way he is.',
              commentUpvotes: -100
            },
            {
              commentOwnerName: 'Chan',
              commentContent: 'Ryan needs help. Send HELP!',
              commentUpvotes: 500
            },
          ],
          postId: 1
        },
      ]
    },
    this.handleAddNewPost = this.handleAddNewPost.bind(this);
  }

  handleAddNewPost(newPost) {
    let newPostList = this.state.masterPostList.slice();
    newPostList.push(newPost);
    this.setState({
      masterPostList: newPostList
    })
  }

  render() {
    return (
      <div>
        <style jsx>{`
          font-family: Helvetica;
          .container {
            min-width: 1040px;
          }
        `}</style>
        {/* <Switch>
          <Route exact path='/' component={} />
        </Switch> */}
        <div className="container">
          <Body 
            postList={this.state.masterPostList}
            onAddNewPost={this.handleAddNewPost}
          />
        </div>
      </div>
    );
  }
}

//App.propTypes = {
//};

export default App;