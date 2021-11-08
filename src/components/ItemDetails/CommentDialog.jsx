import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
} from "@mui/material";
import Draggable from "react-draggable";

export default function CommentDialog() {
  const [openComment, setOpenComment] = React.useState(false);

  const handleClickOpenComment = () => {
    setOpenComment(true);
  };

  const handleCloseComment = () => {
    setOpenComment(false);
  };

  function PaperComponent(props) {
    return (
      <Draggable
        handle="#draggable-dialog-title"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>
    );
  }

  return (
    <div>
      <span
        onClick={handleClickOpenComment}
        className="ms-4 writeReviewBtn cursor-pointer"
      >
        Write a Review
      </span>
      <Dialog
        open={openComment}
        onClose={handleCloseComment}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        style={{ fontSize: "1.5rem" }}
      >
        <DialogTitle
          style={{ cursor: "move", fontSize: "1.8rem", fontWeight: 600 }}
          id="draggable-dialog-title"
        >
          Add a Comment
        </DialogTitle>
        <DialogContent className="pt-3">
          <div className="input-group mb-4">
            <input type="text" className="form-control" placeholder="Title" />
          </div>
          <div className="input-group mb-4">
            <input type="text" className="form-control" placeholder="Name" />
          </div>
          <div className="form-floating">
            <textarea
              className="form-control mb-4"
              placeholder="Leave a comment here"
              style={{ height: "15rem" }}
            ></textarea>
            <label for="floatingTextarea2">Comments</label>
          </div>
          <div className="input-group mb-4">
            <input type="file" className="form-control" />
            <label className="input-group-text" for="inputGroupFile02">
              Upload
            </label>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            style={{ fontSize: "1.2rem" }}
            autoFocus
            onClick={handleCloseComment}
          >
            Cancel
          </Button>
          <Button style={{ fontSize: "1.2rem" }} onClick={handleCloseComment}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
