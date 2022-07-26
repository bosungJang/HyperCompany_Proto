import { ComponentWrapper, Container } from "common/HcCommonLayout";
import HcTextField, {
  HcTitleTextField,
  SelectBox,
  HcSearchTextField,
  HcTagNoInput,
  HcTextFieldLabel,
} from "common/HcTextField";
import { useLocation } from "react-router";
import { createRef, useRef, useState } from "react";
import HcBottomBar from "common/HcBottomBar";
import HcButton from "common/HcButton";
import { SideBar, SideBarInnerContainer, SideBarItem } from "common/HcPopup";
let num = 1;
const data = Array(10)
  .fill(undefined)
  .map(() => ({
    id: num++,
    name: "삼성전자",
    rating: "VIP",
  }));

export default function LeadCreate() {
  const location = useLocation();
  const type = location.state.type;
  const [state, setState] = useState("");
  const [lead, setLead] = useState("");
  const [channel, setChannel] = useState("");
  const [barOpen, setBarOpen] = useState(true);
  const [contactPoint, setContactPoint] = useState(true);
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [customerType, setCustomerType] = useState("");
  const [customerList, setCustomerList] = useState("");
  const [tags, setTags]: any = useState([]);
  const [checkedItem, setCheckedItem]: any = useState([]);
  const [edit, setEdit] = useState(false);
  const Item = ({ name, rating, id }: any) => {
    function checkHandler(checked: Boolean, id: Number) {
      if (checked == true) {
        setCheckedItem([...checkedItem, id]);
        setTags([...tags, id]);
      } else {
        setCheckedItem(checkedItem.filter((i: number) => i != id));
      }
    }

    const [isChecked, setIsChecked] = useState(false);
    const ref: any = createRef();
    return (
      <SideBarItem checked={true}>
        {name}({rating}
        {id}
        {String(ref.current.checked)})
        <input
          type="radio"
          id="radio"
          ref={ref}
          style={{
            width: 16,
            height: 16,
            position: "absolute",
            top: 14,
            right: 14,
          }}
          onClick={() => {
            // if (ref.current.checked === true) {
            //   ref.current.checked = false;
            //   setChecked(false);
            // } else {
            //   ref.current.checked = true;
            //   setChecked(true);
            // }
            ref.current.checked = !ref.current.checked;
          }}
        />
      </SideBarItem>
    );
  };
  return (
    <>
      <ComponentWrapper style={{ display: "block" }}>
        <HcTitleTextField
          titleName={type === "personal" ? "개인 리드 상세" : "기업 리드 상세"}
          isBackIcon
        />
        <Container
          style={{
            marginTop: 37,
            width: 1320,
            height: 258,
            overflow: "visible",
            zIndex: 3,
          }}
          title="기본 정보"
        >
          <div style={{ display: "flex", marginBottom: 20 }}>
            {edit ? (
              <>
                {" "}
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
                  style={{ width: 360 }}
                  items={["활성화", "비활성화"]}
                  state={state}
                  setState={setState}
                  titleName="상태"
                  required
                />
              </>
            ) : (
              <>
                <HcTextFieldLabel
                  titleName="이름"
                  style={{ width: 360, marginRight: 80 }}
                >
                  211026-홍길동-5G LTE 요금제
                </HcTextFieldLabel>
                <HcTextFieldLabel
                  titleName="설명"
                  style={{ width: 360, marginRight: 80 }}
                >
                  5G LTE를 사용하는 요금제입니다.
                </HcTextFieldLabel>
                <HcTextFieldLabel titleName="상태" style={{ width: 360 }}>
                  활성화
                </HcTextFieldLabel>
              </>
            )}
          </div>
          <div style={{ display: "flex" }}>
            {edit ? (
              <>
                {" "}
                <SelectBox
                  style={{ width: 360, marginRight: 80 }}
                  items={["상품 장바구니", "고객센터 문의", "영업 대표 컨택"]}
                  state={lead}
                  setState={setLead}
                  titleName="리드 유형"
                />
                <SelectBox
                  style={{ width: 360 }}
                  items={["A-Call", "커머스", "홈페이지", "오프라인"]}
                  state={channel}
                  setState={setChannel}
                  titleName="채널"
                />
              </>
            ) : (
              <>
                {" "}
                <HcTextFieldLabel
                  titleName="리드 유형"
                  style={{ width: 360, marginRight: 80 }}
                >
                  상품 장바구니
                </HcTextFieldLabel>
                <HcTextFieldLabel titleName="채널" style={{ width: 360 }}>
                  오프라인
                </HcTextFieldLabel>
              </>
            )}
          </div>
        </Container>
        <Container style={{ width: 1320, height: 173 }} title="고객 정보">
          {edit ? (
            <div style={{ display: "flex" }}>
              <HcSearchTextField
                style={{ width: 360, marginRight: 80 }}
                placeholder="개인 고객 조회"
                required
                titleName="고객"
                onClick={() => setSideBarOpen(true)}
              />
              {type === "personal" ? (
                <HcTextField
                  titleName={"번호"}
                  style={{ width: 360, marginRight: 80 }}
                  disabled
                />
              ) : (
                <SelectBox
                  titleName="기업 컨텍트포인트"
                  style={{ width: 360, marginRight: 80 }}
                  items={["상품 장바구니", "고객센터 문의", "영업 대표 컨택"]}
                  state={contactPoint}
                  setState={setContactPoint}
                />
              )}
              <HcTextField titleName="이메일" style={{ width: 360 }} disabled />
            </div>
          ) : (
            <div style={{ display: "flex" }}>
              <HcTextFieldLabel
                titleName="고객"
                style={{ width: 360, marginRight: 80 }}
              >
                홍길동
              </HcTextFieldLabel>
              <HcTextFieldLabel
                titleName={type === "personal" ? "번호" : "기업 컨텍포인트"}
                style={{ width: 360, marginRight: 80 }}
              >
                꽃분이
              </HcTextFieldLabel>
              <HcTextFieldLabel titleName="이메일" style={{ width: 360 }}>
                kildong_hong@gamil.com
              </HcTextFieldLabel>
            </div>
          )}
        </Container>
        <Container style={{ width: 1320, height: 173 }} title="상품 정보">
          <div style={{ display: "flex" }}>
            {edit ? (
              <>
                {" "}
                <HcSearchTextField
                  style={{ width: 360, marginRight: 80 }}
                  placeholder="상품 조회"
                  required
                  titleName="상품"
                />
                <HcTextField
                  titleName="자체 상품 코드"
                  style={{ width: 360, marginRight: 80 }}
                  disabled
                />
                <HcTextField
                  titleName="권장 소비자 가격"
                  style={{ width: 360 }}
                  disabled
                />
              </>
            ) : (
              <>
                <HcTextFieldLabel
                  titleName="상품"
                  style={{ width: 360, marginRight: 80 }}
                >
                  5G LTE 요금제
                </HcTextFieldLabel>
                <HcTextFieldLabel
                  titleName={"자체 상품 코드"}
                  style={{ width: 360, marginRight: 80 }}
                >
                  000001
                </HcTextFieldLabel>
                <HcTextFieldLabel titleName="이메일" style={{ width: 360 }}>
                  10,000
                </HcTextFieldLabel>
              </>
            )}
          </div>
        </Container>
      </ComponentWrapper>
      <HcBottomBar open={barOpen}>
        {edit ? (
          <>
            <HcButton
              styles="primary"
              size="big"
              style={{ marginRight: 12 }}
              onClick={() => {
                setEdit(false);
              }}
            >
              저장
            </HcButton>
            <HcButton
              styles="line"
              size="big"
              onClick={() => {
                setEdit(false);
              }}
            >
              취소
            </HcButton>
          </>
        ) : (
          <>
            <HcButton
              styles="primary"
              size="big"
              style={{ marginRight: 12 }}
              onClick={() => {
                setEdit(true);
              }}
            >
              수정
            </HcButton>
            <HcButton
              styles="line"
              size="big"
              onClick={() => {
                setEdit(false);
              }}
            >
              취소
            </HcButton>
          </>
        )}
      </HcBottomBar>
      <SideBar
        header={"고객 조회"}
        open={sideBarOpen}
        close={() => {
          setSideBarOpen(false);
        }}
        style={{ display: "block" }}
      >
        <div
          style={{ float: "left", height: 36, width: 514, marginBottom: 16 }}
        >
          <SelectBox
            state={customerType}
            setState={setCustomerType}
            items={["기업 고객", "기업 고객", "기업 고객"]}
            style={{ width: 190 }}
          />
          <SelectBox
            state={customerList}
            setState={setCustomerList}
            items={["삼성전자(VIP)", "삼성전자(VIP)", "삼성전자(VIP)"]}
            style={{ width: 276, marginLeft: 8 }}
            placeholder="고객 검색"
          />
          <svg
            style={{ position: "absolute", top: 5, right: 60 }}
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
              d="M17.2869 8.18777C19.5384 10.8591 19.198 14.8499 16.5266 17.1013C13.8552 19.3528 9.86451 19.0124 7.61305 16.341C5.36159 13.6697 5.70199 9.67893 8.37336 7.42747C11.0447 5.17601 15.0355 5.51641 17.2869 8.18777ZM18.4159 17.8618C21.2216 14.8787 21.4079 10.2004 18.7046 6.9929C15.7933 3.53855 10.6328 3.09838 7.17848 6.00975C3.72413 8.92112 3.28396 14.0816 6.19533 17.5359C8.8074 20.6351 13.2299 21.3081 16.6063 19.3111L21.2035 24.7656C21.6159 25.2549 22.347 25.3173 22.8364 24.9049C23.3257 24.4924 23.3881 23.7614 22.9756 23.272L18.4159 17.8618Z"
              fill="#5D5D62"
            />
          </svg>
        </div>
        <HcTagNoInput
          tags={tags}
          setTags={setTags}
          delete
          style={{
            height: 76,
            marginTop: 16,
            display: tags.length === 0 ? "none" : "",
          }}
        />
        <div
          style={{
            display: "flex",
            width: 514,
            color: "#4D4D4D",
            fontSize: "14px",
            height: 24,
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
            {data.length}
          </div>
          명
        </div>
        <SideBarInnerContainer
          style={{ height: tags.length === 0 ? 572 : 480 }}
        >
          {data.map(({ name, rating, id }) => (
            <Item name={name} rating={rating} id={id} />
          ))}
        </SideBarInnerContainer>
      </SideBar>
    </>
  );
}
