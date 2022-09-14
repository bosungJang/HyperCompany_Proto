import { ComponentWrapper, Container } from "common/HcCommonLayout";
import HcTextField, {
  HcSearchTextField,
  HcTitleTextField,
  SelectBox,
  HcTagNoInput,
  HcTextFieldLabel,
} from "common/HcTextField";
import { useState } from "react";
import HcButton from "common/HcButton";
import HcBottomBar from "common/HcBottomBar";
import { HcDateRangePicker, DateRangeLabel } from "common/HcDatePicker";
import { SideBar, SideBarItem } from "common/HcPopup";

function BenefitDetail() {
  const [edit, setEdit] = useState(false);
  const [state, setState] = useState("");
  const [startDate, setStartDate] = useState(new Date()); //유효기간시작
  const [endDate, setEndDate] = useState(new Date()); //유효기간끝
  const [detailedTarget, setDetailedTarget] =
    useState("제품 카테고리 상세 대상 조회");
  const unitArray = [{ name: "금액", value: "원" }];
  const typeArray = [
    { name: "적립", background: "#E6F3EC", color: "#4DAD79" },
    { name: "할인", background: "#FFE9E9", color: "#F06666" },
    { name: "쿠폰", background: "#F7E9FA", color: "#CA68D9" },
  ];
  const [type, setType]: any = useState(
    <div
      style={{
        background: typeArray[0].background,
        width: 36,
        height: 25,
        padding: "3px 0px 0px 5px",
        borderRadius: 2,
        fontSize: "13px",
        fontWeight: 700,
        color: typeArray[0].color,
      }}
    >
      {typeArray[0].name}
    </div>
  );
  const [unit, setUnit] = useState("금액");
  const [tags, setTags] = useState<string[]>([]);
  /*BottomBar */
  const [barOpen, setbarOpen] = useState(true);
  /*BottomBar */

  const [sideBarOpen, setSideBarOpen] = useState(false);
  const openSideBar = () => {
    setSideBarOpen(true);
  };
  const [sideBarSearchField, setSideBarSearchField] = useState("");
  const [sideBarChecked, setSideBarChecked]: any = useState([]); //side bar 체크박스 관리
  const [checkedItem, setCheckedItem] = useState(""); //side bar 현재 체크된 아이템
  interface DataForm {
    name: string;
    id: string;
  }
  const sidebarData = [
    { name: "TV", id: "1" },
    { name: "모바일", id: "2" },
    { name: "키보드", id: "3" },
    { name: "마우스", id: "4" },
  ];
  function checkAllHandler(checked: boolean) {
    if (sideBarOpen) {
      if (checked) {
        const ids: Number[] = [];
        // sideBarData.forEach((i: any) => ids.push(i.id));
        setSideBarChecked(ids);
      }
    }
  }
  const onSubmit = () => {
    alert("submit");
  };
  const Item = ({ props }: { props: DataForm }): JSX.Element => {
    return (
      <>
        <SideBarItem checked={checkedItem === props.id}>
          {/* 사진정보 있을 시 주소 추가 */}
          {props.name}({props.id})
          <input
            type="radio"
            checked={checkedItem === props.id}
            style={{
              width: 16,
              height: 16,
              position: "absolute",
              top: 14,
              right: 14,
            }}
            onClick={(e: any) => {
              if (e.target.checked === true) {
                setCheckedItem("0");
                setTags([]);
              }
            }}
            onChange={(e: any) => {
              if (e.target.checked === false) {
                setCheckedItem("0");
                setTags([]);
              } else if (e.target.checked === true) {
                setCheckedItem(props.id);
                setTags([props.name]);
              }
            }}
          />
        </SideBarItem>
      </>
    );
  };
  return (
    <>
      <ComponentWrapper style={{ display: "block", minHeight: 1300 }}>
        <HcTitleTextField titleName="혜택 상세" isBackIcon />
        <form id="benefit-form" onSubmit={onSubmit}>
          <Container
            title="Title_02"
            maxHeight={258}
            width={1320}
            style={{ marginTop: 39, overflow: "visible", zIndex: 2 }}
          >
            {edit ? (
              <>
                <div style={{ display: "flex" }}>
                  <HcTextField
                    titleName="이름"
                    placeholder="이름 입력"
                    style={{ width: 360, marginRight: 80 }}
                  />
                  <HcTextField
                    titleName="설명"
                    style={{ width: 360, marginRight: 80 }}
                  />
                  <SelectBox
                    titleName="상태"
                    required
                    style={{ width: 360 }}
                    state={state}
                    setState={setState}
                    items={["활성화", "비활성화"]}
                  />
                </div>
                <div style={{ display: "flex", marginTop: 20 }}>
                  <SelectBox
                    titleName="유형"
                    required
                    style={{ width: 360, marginRight: 80 }}
                    state={type}
                    setState={setType}
                    items={typeArray.map((i) => (
                      <div
                        style={{
                          background: i.background,
                          width: 36,
                          height: 25,
                          padding: "3px 0px 0px 5px",
                          borderRadius: 2,
                          fontSize: "13px",
                          fontWeight: 700,
                          color: i.color,
                        }}
                      >
                        {i.name}
                      </div>
                    ))}
                  />
                  <HcDateRangePicker
                    titleName="유효 기간"
                    startDate={startDate}
                    endDate={endDate}
                    setStartDate={setStartDate}
                    setEndDate={setEndDate}
                  />
                </div>
              </>
            ) : (
              <>
                <div style={{ display: "flex" }}>
                  <HcTextFieldLabel
                    titleName="이름"
                    style={{ width: 360, marginRight: 80 }}
                  >
                    이름
                  </HcTextFieldLabel>
                  <HcTextFieldLabel
                    titleName="설명"
                    style={{ width: 360, marginRight: 80 }}
                  >
                    최초 가입자에게 주는 혜택
                  </HcTextFieldLabel>
                  <HcTextFieldLabel
                    titleName="상태"
                    required
                    style={{ width: 360 }}
                  >
                    활성화{" "}
                  </HcTextFieldLabel>
                </div>
                <div style={{ display: "flex", marginTop: 20 }}>
                  <HcTextFieldLabel
                    titleName="유형"
                    required
                    style={{ width: 360, marginRight: 80 }}
                  >
                    {type}
                  </HcTextFieldLabel>
                  <DateRangeLabel
                    titleName="유효 기간"
                    startDate={startDate}
                    endDate={endDate}
                  />
                </div>
              </>
            )}
          </Container>
          <Container
            title="Title_02"
            maxHeight={173}
            width={1320}
            style={{
              zIndex: 1,
            }}
          >
            <div style={{ display: "flex" }}>
              {edit ? (
                <>
                  {" "}
                  <SelectBox
                    titleName="대상"
                    style={{ width: 360, marginRight: 80 }}
                    state={state}
                    setState={setState}
                    items={[]}
                  />
                  <HcSearchTextField
                    titleName="상세 대상"
                    onClick={openSideBar}
                    value={detailedTarget}
                    style={{ width: 360 }}
                  />
                </>
              ) : (
                <>
                  <HcTextFieldLabel
                    titleName="대상"
                    style={{ width: 360, marginRight: 80 }}
                  >
                    채널
                  </HcTextFieldLabel>
                  <HcTextFieldLabel
                    titleName="상세 대상"
                    style={{ width: 360 }}
                  >
                    페이스북
                  </HcTextFieldLabel>
                </>
              )}
            </div>
          </Container>
          <Container
            title="Title_02"
            maxHeight={173}
            width={1320}
            style={{ overflow: "visible" }}
          >
            {" "}
            <div style={{ display: "flex" }}>
              {edit ? (
                <>
                  {" "}
                  <SelectBox
                    titleName="단위"
                    required
                    style={{ width: 360, marginRight: 80 }}
                    state={unit}
                    setState={setUnit}
                    items={unitArray.map((i) => i.name)}
                  />
                  <HcTextField
                    titleName="값"
                    required
                    style={{ width: 360 }}
                    unit={
                      unitArray[unitArray.findIndex((x) => x.name === unit)]
                        .value
                    }
                    placeholder="값 입력"
                    deleteAll
                    onChange={(e: any) => {}}
                  />
                </>
              ) : (
                <>
                  <HcTextFieldLabel
                    titleName="단위"
                    style={{ width: 360, marginRight: 80 }}
                  >
                    금액
                  </HcTextFieldLabel>
                  <HcTextFieldLabel titleName="값" style={{ width: 360 }}>
                    9900
                    {
                      unitArray[unitArray.findIndex((x) => x.name === unit)]
                        .value
                    }
                  </HcTextFieldLabel>
                </>
              )}
            </div>
          </Container>
        </form>
      </ComponentWrapper>

      <HcBottomBar open={barOpen} style={{ width: 1400 }}>
        <div>
          {edit ? (
            <HcButton
              onClick={() => {
                setEdit(!edit);
                onSubmit();
              }}
              form="benefit-form"
              type="submit"
              styles="primary"
              style={{ marginRight: "5px" }}
              size="big"
            >
              저장
            </HcButton>
          ) : (
            <HcButton
              onClick={() => {
                setEdit(!edit);
              }}
              styles="primary"
              style={{ marginRight: "5px" }}
              size="big"
            >
              수정
            </HcButton>
          )}

          <HcButton
            onClick={() => {}}
            styles="line"
            style={{ marginRight: "5px" }}
            size="big"
          >
            취소
          </HcButton>
        </div>
      </HcBottomBar>
      <SideBar
        header={"상세 대상 조회"}
        open={sideBarOpen}
        close={() => {
          setSideBarOpen(false);
        }}
        style={{ display: "block" }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{ height: 36, margin: "0px 10px 16px 0px", paddingTop: 7 }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="30" height="30" rx="3" fill="white" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.45 9.49741C18.715 11.7625 18.715 15.4348 16.45 17.6999C14.185 19.9649 10.5126 19.9649 8.24757 17.6999C5.98253 15.4348 5.98253 11.7625 8.24757 9.49741C10.5126 7.23237 14.185 7.23237 16.45 9.49741ZM18.235 18.2477C20.5661 15.3038 20.3718 11.015 17.6521 8.29533C14.7232 5.3664 9.97442 5.3664 7.04549 8.29533C4.11656 11.2243 4.11656 15.973 7.04549 18.9019C9.67321 21.5297 13.7657 21.7999 16.6947 19.7126L21.3199 24.3379C21.7348 24.7528 22.4076 24.7528 22.8225 24.3379C23.2374 23.9229 23.2374 23.2502 22.8225 22.8353L18.235 18.2477Z"
                fill="#5D5D62"
              />
            </svg>
          </div>
          <HcTextField
            placeholder="제품 카테고리 검색"
            style={{ width: 474 }}
            onChange={(e: any) => {
              setSideBarSearchField(e.target.value);
            }}
          />
        </div>
        <HcTagNoInput
          tags={tags}
          setTags={setTags}
          style={{ width: "100%", height: 76 }}
          deleteAll
          delete
        />
        <div
          style={{
            display: "flex",
            width: 514,
            color: "#4D4D4D",
            fontSize: "14px",
            height: 24,
            marginTop: 20,
          }}
        >
          총
          <div
            style={{
              color: "#000000",
              fontSize: "16px",
              fontWeight: 600,
              marginLeft: 3,
            }}
          >
            30
          </div>
          명
        </div>
        {checkedItem}
        {sidebarData.map((data) => (
          <Item props={data} />
        ))}
      </SideBar>
    </>
  );
}
export default BenefitDetail;
