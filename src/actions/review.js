// const apiURL = "http://localhost:3000/api/v1/";

// // fetch user's comments from backend
// export function getComments() {
//   return (dispatch) => {
//     const reqObj = {
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         Authorization: "Bearer " + localStorage.getItem("token"),
//       },
//     };

//     fetch(`${apiURL}user`, reqObj)
//       .then((resp) => resp.json())
//       .then((data) => {
//         const comments = data.comments;
//         dispatch({ type: "GET_COMMENTS", comments });
//       });
//   };
// }

// // post request to add comment to backend
// // NOTE: post request returns *all* of user's comments 
// export function addComment(episode, comment) {
//   return (dispatch) => {
//     const reqObj = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         Authorization: "Bearer " + localStorage.getItem("token"),
//       },
//       body: JSON.stringify({ episode, comment }),
//     };

//     fetch(`${apiURL}episodes`, reqObj)
//       .then((resp) => resp.json())
//       .then((data) => {
//         const comments = data.comments;
//         dispatch({ type: "ADD_COMMENT", comments });
//       });
//   };
// }

// // update comment in backend, returns the one comment
// export function updateComment(id, note) {
//   return (dispatch) => {
//     const reqObj = {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         Authorization: "Bearer " + localStorage.getItem("token"),
//       },
//       body: JSON.stringify({ id, note }),
//     };
//     fetch(`${apiURL}comments/${id}`, reqObj)
//       .then((resp) => resp.json())
//       .then((comment) => dispatch({type: "UPDATE_COMMENT", comment}));
//   };
// }

// // delete comment in backend
// export function removeComment(id) {
//   return (dispatch) => {
//     const reqObj = {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         Authorization: "Bearer " + localStorage.getItem("token"),
//       }
//     }
//     fetch(`${apiURL}comments/${id}`, reqObj)
//     .then(() => dispatch({type: "REMOVE_COMMENT", id}))
//   }
// }
