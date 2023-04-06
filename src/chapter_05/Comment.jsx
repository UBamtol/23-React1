import React from 'react';

const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid grey',
    borderRadius: 16,
  },
  imageContainer: {},
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentContainer: {
    marginLeft: 8,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  nameText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  commentText: {
    color: 'black',
    fontSize: 16,
  },
};

const Comment = (props) => {
  return (
    <div style={styles.wrapper}>
      <div styles={styles.imageContainer}>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
          alt='profile'
          style={styles.image}
        />
      </div>
      <div style={styles.contentContainer}>
        <span styles={styles.nameText}>{props.name}</span>
        <span styles={styles.commentText}>{props.comment}</span>
      </div>
    </div>
  );
};

export default Comment;
