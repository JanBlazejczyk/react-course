import "./Dialog.scss";

function Dialog({ title, content, active, children }) {
  if (active) {
    return (
      <div className="dialog">
        <div className="dialog__header">
          <h4 className="dialog__header--title">{title}</h4>
        </div>
        <div>
          <p className="dialog__content">{content}</p>
        </div>
        <div className="dialog__buttons">{children}</div>
      </div>
    );
  } else {
    return null;
  }
}

export default Dialog;
