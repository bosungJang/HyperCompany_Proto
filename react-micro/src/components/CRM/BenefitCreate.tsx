import { ComponentWrapper, Container } from "common/HcCommonLayout";
import HcTextField, { HcTitleTextField, SelectBox } from "common/HcTextField";
import { useState } from "react";
import HcButton from "common/HcButton";
import HcBottomBar from "common/HcBottomBar";
import { HcDateRangePicker } from "common/HcDatePicker";
export default function BenefitCreate() {
  const [state, setState] = useState("");
  const [type, setType] = useState("");
  /*BottomBar */
  const [barOpen, setbarOpen] = useState(true);
  /*BottomBar */

  /* pop up */
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  /* pop up */

  return (
    <>
      <ComponentWrapper style={{ display: "block", minHeight: 1300 }}>
        <HcTitleTextField titleName="혜택 생성" isBackIcon />
        <Container
          title="Title_02"
          maxHeight={258}
          width={1320}
          style={{ marginTop: 39, overflow: "visible", zIndex: 2 }}
        >
          <div style={{ display: "flex" }}>
            <HcTextField
              titleName="이름"
              placeholder="이름 입력"
              style={{ width: 360, marginRight: 80 }}
            />
            <HcTextField
              titleName="설명"
              style={{ width: 360, marginRight: 80 }}
              deleteAll
              onChange={(e: any) => {
                console.log(e.target.value);
              }}
            />
            <SelectBox
              titleName="상태"
              required
              style={{ width: 360 }}
              state={state}
              setState={setState}
              items={[]}
            />
          </div>
          <div style={{ display: "flex", marginTop: 20 }}>
            <SelectBox
              titleName="유형"
              required
              style={{ width: 360, marginRight: 80 }}
              state={state}
              setState={setState}
              items={["적립", "할인", "쿠폰"]}
            />
            <HcDateRangePicker titleName="유효 기간" />
          </div>
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
            <SelectBox
              titleName="대상"
              style={{ width: 360, marginRight: 80 }}
              state={state}
              setState={setState}
              items={[]}
            />
            <SelectBox
              titleName="상세 대상"
              disabled
              style={{ width: 360 }}
              state={state}
              setState={setState}
              items={[]}
            />
          </div>
        </Container>
        <Container title="Title_02" maxHeight={173} width={1320}></Container>
      </ComponentWrapper>

      <HcBottomBar open={barOpen} style={{ width: 1400 }}>
        <div>
          <HcButton
            onClick={() => {}}
            styles="primary"
            style={{ marginRight: "5px" }}
            size="big"
          >
            생성
          </HcButton>

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
    </>
  );
}
