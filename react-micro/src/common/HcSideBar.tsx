import styled from "styled-components";

export const styles: any = {
  modal: {
    display: "none",
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 99,
  },

  openModal: {
    display: "flex",
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 99,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
};

const SideBar = styled.div`
  max-height: 100%;
  max-width: 574px;
  min-height: 100%;
  min-width: 574px;
  position: absolute !important;
  top: 0;
  bottom: 0;
  background-color: white;
  transition: 0.5s;
  padding: 30px 30px 20px 30px;
  z-index: 500;
`;
export default function HcSideBar(props?: any) {
  const { open, children, style } = props;
  return (
    <div style={open ? styles.openModal : styles.modal} onClick={() => !open}>
      {open ? (
        <SideBar
          style={{
            right: open === true ? 0 : -600,
          }}
        >
          <div style={style}> {children}</div>
        </SideBar>
      ) : null}
    </div>
  );
}
