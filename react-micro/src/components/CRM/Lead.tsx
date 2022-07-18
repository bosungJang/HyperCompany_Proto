import React from "react";
import styled from "styled-components";
import { ComponentWrapper } from "common/HcCommonLayout";
import HcTextField, { HcTitleTextField } from "common/HcTextField";
import HcTabs, { HcTabsAdv } from "common/HcTabs";
import { HcDropDownButton } from "common/HcButton";
import HcDropDownTable, {
  HcDropDownTableAnother,
} from "common/HcDropDownTable";
import HcCheckBox from "common/HcCheckBox";
import {
  TableActionBtn,
  HcTable,
  HcTableContainer,
  NullTbody,
  TableSetting,
} from "common/HcTableComponent";
import { useHistory } from "react-router-dom";

const Lead = () => {
  const [Tabs, setTabs] = React.useState("1");
  const history = useHistory();
  const [data, setData] = React.useState<dataType[]>([
    {
      name: "211026-홍길동",
      customer: "홍길동",
      activate: true,
      type: "personal",
      product: "-",
      category: "-",
      channel: "-",
      create: "2020.01.01",
    },
    {
      name: "211026-삼성전자-5G LTE",
      customer: "삼성전자",
      activate: true,
      type: "enterprise",
      product: "5GLTE 무제한 요금제",
      category: "장바구니",
      channel: "커머스",
      create: "2020.01.01",
    },
    {
      name: "211026-홍길동",
      customer: "홍길동",
      activate: false,
      type: "personal",
      product: "5GLTE 무제한 요금제",
      category: "영업 대표 컨택",
      channel: "A-Call",
      create: "2020.01.01",
    },
  ]);
  interface dataType {
    name: string;
    customer: string;
    activate: boolean;
    type: string;
    product: string;
    channel: string;
    category: string;
    create: string;
  }

  return (
    <>
      <ComponentWrapper>
        <div style={{ display: "block" }}>
          <HcTitleTextField titleName="리드" isBackIcon={false} />
          <div style={{ marginTop: "39px" }}>
            <HcTabsAdv
              items={[
                { to: "1", name: "전체(5)" },
                { to: "2", name: "개인 리드(5)" },
                { to: "3", name: "기업 리드(2)" },
              ]}
              size="normal"
              TabNumber={Tabs}
              SetTabNumber={setTabs}
            />
            <div
              className="body_area"
              style={{ display: "flex", marginTop: "20px" }}
            >
              {
                {
                  "1": (
                    <>
                      <div>
                        <div style={{ display: "flex" }}>
                          <HcDropDownButton
                            title="+ 생성"
                            style={{ zIndex: 5, marginRight: 1085 }}
                            dropDownMenu={[
                              {
                                title: "개인 리드 생성",
                                onClick: () => {
                                  history.push({
                                    pathname: "/crm/leadCreate",
                                    state: "personal",
                                  });
                                },
                              },
                              {
                                title: "기업 리드 생성",
                                onClick: () => {
                                  history.push({
                                    pathname: "/crm/leadCreate",
                                    state: "enterprise",
                                  });
                                },
                              },
                            ]}
                          />
                          <TableSetting />
                        </div>
                        <div style={{ marginTop: "20px" }}>
                          <HcTableContainer
                            style={{ minHeight: "unset", width: "1320px" }}
                          >
                            <HcTable>
                              <thead
                                style={{
                                  tableLayout: "fixed",
                                }}
                              >
                                <tr>
                                  <th
                                    style={{
                                      width: "46px",
                                    }}
                                  >
                                    <div
                                      style={{
                                        paddingTop: 4,
                                      }}
                                    >
                                      <HcCheckBox
                                        checked={false}
                                        onChange={() => {}}
                                      />
                                    </div>
                                  </th>

                                  <th
                                    style={{
                                      width: "224px",
                                    }}
                                  >
                                    {"리드 이름"}
                                  </th>
                                  <th
                                    style={{
                                      width: "160px",
                                    }}
                                  >
                                    {"고객"}
                                  </th>
                                  <th style={{ width: "160px" }}>{"상품"}</th>
                                  <th style={{ width: "160px" }}>
                                    {"리드 상태"}
                                  </th>
                                  <th style={{ width: "160px" }}>
                                    {"리드 유형"}
                                  </th>
                                  <th
                                    style={{
                                      width: "160px",
                                    }}
                                  >
                                    {"채널"}
                                  </th>
                                  <th style={{ width: "130px" }}>
                                    {"생성날짜"}
                                  </th>
                                  <th style={{ width: "120px" }}>-</th>
                                </tr>
                              </thead>
                              <tbody>
                                {data.map((item: dataType) => (
                                  <tr>
                                    <td style={{ position: "relative" }}>
                                      <div style={{}}>
                                        <HcCheckBox
                                          checked={false}
                                          onChange={() => {}}
                                        />
                                      </div>
                                    </td>
                                    <td
                                      style={{
                                        position: "relative",
                                      }}
                                    >
                                      <div
                                        style={{
                                          position: "absolute",
                                          display: "flex",
                                          height: 29,
                                          width: "fit-content",
                                          top: 9,
                                          left: 12,
                                          lineHeight: "29px",
                                        }}
                                      >
                                        {item.name}
                                        {data.indexOf(item) === 0 ? (
                                          <div
                                            style={{
                                              marginLeft: 6,
                                              borderRadius: 2,
                                              color: "#ffffff",
                                              background: "#FFCF54",
                                              padding: 4,
                                              lineHeight: "20px",
                                            }}
                                          >
                                            신규
                                          </div>
                                        ) : (
                                          ""
                                        )}
                                      </div>
                                    </td>
                                    <td
                                      style={{
                                        position: "relative",
                                      }}
                                    >
                                      <div
                                        style={{
                                          position: "absolute",
                                          top: 10,
                                          left: 12,
                                          display: "flex",
                                        }}
                                      >
                                        {" "}
                                        <a
                                          href=""
                                          style={{
                                            color: "#257CFF",
                                            lineHeight: "26px",
                                            marginRight: "6px",
                                          }}
                                        >
                                          {item.customer}
                                        </a>
                                        <div
                                          style={{
                                            background: "#EDEDED",
                                            borderRadius: "2px",
                                            fontSize: "13px",
                                            color: "#838181",
                                            height: "26px",
                                            display: "flex",
                                            fontWeight: 700,
                                            padding: "3px 6px 3px 6px",
                                          }}
                                        >
                                          {item.type === "personal" ? (
                                            <svg
                                              width="20"
                                              height="20"
                                              viewBox="0 0 20 20"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                              style={{ marginRight: 6 }}
                                            >
                                              <path
                                                d="M16.1299 6.41024C16.1299 7.68778 15.0809 8.73714 13.7698 8.73714C12.4587 8.73714 11.4097 7.68778 11.4097 6.41024C11.4097 5.1327 12.4587 4.08334 13.7698 4.08334C15.0809 4.08334 16.1299 5.1327 16.1299 6.41024Z"
                                                stroke="#838181"
                                                stroke-width="1.5"
                                              />
                                              <path
                                                d="M9.62317 15.8334V12.5128C9.62317 11.4082 10.5186 10.5128 11.6232 10.5128H15.9168C17.0214 10.5128 17.9168 11.4082 17.9168 12.5128V15.8334"
                                                stroke="#838181"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                              />
                                              <path
                                                d="M8.59029 6.41024C8.59029 7.68778 7.54125 8.73714 6.23018 8.73714C4.9191 8.73714 3.87006 7.68778 3.87006 6.41024C3.87006 5.1327 4.9191 4.08334 6.23018 4.08334C7.54125 4.08334 8.59029 5.1327 8.59029 6.41024Z"
                                                stroke="#838181"
                                                stroke-width="1.5"
                                              />
                                              <path
                                                d="M2.08331 15.8334V12.5128C2.08331 11.4082 2.97874 10.5128 4.08331 10.5128H7.73808"
                                                stroke="#838181"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                              />
                                            </svg>
                                          ) : (
                                            <svg
                                              width="20"
                                              height="20"
                                              viewBox="0 0 20 20"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                              style={{ marginRight: 6 }}
                                            >
                                              <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M3.625 4.95834C3.625 4.82027 3.73693 4.70834 3.875 4.70834H9.375C9.51307 4.70834 9.625 4.82027 9.625 4.95834V16.4583H11.125V8.04168H16.0417C16.1797 8.04168 16.2917 8.1536 16.2917 8.29168V16.4583H17.7917V8.29168C17.7917 7.32518 17.0082 6.54168 16.0417 6.54168H11.125V4.95834C11.125 3.99185 10.3415 3.20834 9.375 3.20834H3.875C2.9085 3.20834 2.125 3.99184 2.125 4.95834V16.4583H3.625V4.95834ZM4.54167 5.62501H8.70833V6.87501H4.54167V5.62501ZM8.70833 8.12501H4.54167V9.37501H8.70833V8.12501ZM4.54167 10.625H8.70833V11.875H4.54167V10.625ZM8.70833 13.125H4.54167V14.375H8.70833V13.125ZM12.0417 10.625H15.375V11.875H12.0417V10.625ZM15.375 13.125H12.0417V14.375H15.375V13.125Z"
                                                fill="#838181"
                                              />
                                            </svg>
                                          )}

                                          {item.type === "personal"
                                            ? "개인"
                                            : "기업"}
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      {item.product === "-" ? (
                                        item.product
                                      ) : (
                                        <a href="" style={{ color: "#257CFF" }}>
                                          {item.product}
                                        </a>
                                      )}
                                    </td>
                                    <td
                                      style={{
                                        color: item.activate
                                          ? "#000000"
                                          : "#5D5D62",
                                      }}
                                    >
                                      {item.activate ? "활성화" : "비활성화"}
                                    </td>
                                    <td>{item.category}</td>
                                    <td>{item.channel}</td>
                                    <td>{item.create}</td>
                                    <td>
                                      <TableActionBtn />
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </HcTable>
                          </HcTableContainer>
                        </div>
                      </div>
                    </>
                  ),
                  "2": <>test</>,
                }[Tabs]
              }
            </div>
          </div>
        </div>
      </ComponentWrapper>
    </>
  );
};
export default Lead;
