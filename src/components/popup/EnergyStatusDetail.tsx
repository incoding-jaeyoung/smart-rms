'use client';

import ContentModal from '@/components/ui/ContentModal';
import { DatePicker } from 'antd';
import Image from 'next/image';
import dayjs from 'dayjs';

interface EnergyDetailProps {
  open: boolean;
  onCloseAction: () => void;
}

export default function EnergyDetailPopup({ open, onCloseAction }: EnergyDetailProps) {
  const { RangePicker } = DatePicker;
  return (
    <ContentModal open={open} onCloseAction={onCloseAction}>
      <div className="modal-con-header">
        <div className="flex items-center gap-1.5 w-[510px]">
          <button type="button" className="btn-back">
            <Image src="/icons/ico-back.svg" alt="" width={30} height={30} />
            목록
          </button>
        </div>
      </div>
      <div className="modal-con-body">
        <div className="popup-content">
          <div className="contents-scroll !mb-0">
            <div className="energy-summary">
              <dl className="energy-summary-item">
                <dt>
                  금일 누적
                  <br />
                  유효 전력량
                </dt>
                <dd>
                  120 <span>kWh</span>
                </dd>
              </dl>
              <dl className="energy-summary-item">
                <dt>
                  총 누적
                  <br />
                  유효 전력량
                </dt>
                <dd>
                  120 <span>kWh</span>
                </dd>
              </dl>
              <dl className="energy-summary-item">
                <dt>
                  금일 누적
                  <br />
                  탄소 배출량
                </dt>
                <dd>
                  20 <span>kgCO₂eq</span>
                </dd>
              </dl>
              <dl className="energy-summary-item">
                <dt>
                  총 누적
                  <br />
                  탄소 배출량
                </dt>
                <dd>
                  20 <span>kgCO₂eq</span>
                </dd>
              </dl>
            </div>
            <div className="rtu-list !mt-15">
              <div className="rtu-item">
                <div className="rtu-item-header">
                  <h2 className="!w-auto">장비별 전력량계</h2>
                  <div className="!ml-2">
                    <RangePicker
                      className="range-picker"
                      format="YYYY.MM.DD"
                      defaultValue={[dayjs(), dayjs()]}
                      placeholder={['시작일', '종료일']}
                    />
                  </div>
                  <button type="button" className="btn-detail">
                    엑셀다운로드
                    <Image src="/icons/ico-download.svg" alt="" width={14} height={14} />
                  </button>
                </div>
              </div>
            </div>
            <table className="bbs-list-table table-small mt-2.5">
              <colgroup>
                <col width="50px" />
                <col width="50px" />
                <col width="100px" />
                <col width="100px" />
                <col width="90px" />
                <col width="90px" />
                <col width="90px" />
                <col width="90px" />
                <col width="90px" />
                <col width="90px" />
                <col width="auto" />
              </colgroup>
              <thead>
                <tr>
                  <th>no.</th>
                  <th>장비</th>
                  <th>
                    누적유효전력량 <p>(kWh)</p>
                  </th>
                  <th>
                    누적무효전력량
                    <p>(kvarh)</p>
                  </th>
                  <th>
                    A상 전압
                    <p>(V)</p>
                  </th>
                  <th>
                    B상 전압
                    <p>(V)</p>
                  </th>
                  <th>
                    C상 전압
                    <p>(V)</p>
                  </th>
                  <th>
                    A상 전류
                    <p>(A)</p>
                  </th>
                  <th>
                    B상 전류
                    <p>(A)</p>
                  </th>
                  <th>
                    C상 전류
                    <p>(A)</p>
                  </th>
                  <th>일시</th>
                </tr>
              </thead>
            </table>
            <div className="bbs-list-wrap !bg-transparent !h-auto flex-none">
              <div className="bbs-scroll">
                <table className="bbs-list-table table-small">
                  <colgroup>
                    <col width="50px" />
                    <col width="50px" />
                    <col width="100px" />
                    <col width="100px" />
                    <col width="90px" />
                    <col width="90px" />
                    <col width="90px" />
                    <col width="90px" />
                    <col width="90px" />
                    <col width="90px" />
                    <col width="auto" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <td rowSpan={2}>1</td>
                      <td>RTU_1</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td rowSpan={2}>
                        25.09.25 <br />
                        16:10:00
                      </td>
                    </tr>
                    <tr>
                      <td>RTU_1</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td rowSpan={2}>1</td>
                      <td>RTU_1</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td rowSpan={2}>
                        25.09.25 <br />
                        16:10:00
                      </td>
                    </tr>
                    <tr>
                      <td>RTU_1</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td rowSpan={2}>1</td>
                      <td>RTU_1</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td rowSpan={2}>
                        25.09.25 <br />
                        16:10:00
                      </td>
                    </tr>
                    <tr>
                      <td>RTU_1</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td rowSpan={2}>1</td>
                      <td>RTU_1</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td rowSpan={2}>
                        25.09.25 <br />
                        16:10:00
                      </td>
                    </tr>
                    <tr>
                      <td>RTU_1</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td rowSpan={2}>1</td>
                      <td>RTU_1</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td rowSpan={2}>
                        25.09.25 <br />
                        16:10:00
                      </td>
                    </tr>
                    <tr>
                      <td>RTU_1</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td rowSpan={2}>1</td>
                      <td>RTU_1</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td rowSpan={2}>
                        25.09.25 <br />
                        16:10:00
                      </td>
                    </tr>
                    <tr>
                      <td>RTU_1</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td rowSpan={2}>1</td>
                      <td>RTU_1</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td rowSpan={2}>
                        25.09.25 <br />
                        16:10:00
                      </td>
                    </tr>
                    <tr>
                      <td>RTU_1</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="rtu-list !mt-15">
              <div className="rtu-item">
                <div className="rtu-item-header">
                  <h2 className="!w-auto">전력/탄소 배출량 집계</h2>
                  <div className="!ml-2">
                    <RangePicker
                      className="range-picker"
                      format="YYYY.MM.DD"
                      defaultValue={[dayjs(), dayjs()]}
                      placeholder={['시작일', '종료일']}
                    />
                  </div>
                  <button type="button" className="btn-detail">
                    엑셀다운로드
                    <Image src="/icons/ico-download.svg" alt="" width={14} height={14} />
                  </button>
                </div>
              </div>
            </div>
            <table className="bbs-list-table table-small mt-2.5">
              <colgroup>
                <col width="50px" />
                <col width="50px" />
                <col width="100px" />
                <col width="100px" />
                <col width="90px" />
                <col width="90px" />
                <col width="90px" />
                <col width="90px" />
                <col width="90px" />
                <col width="90px" />
                <col width="auto" />
              </colgroup>
              <thead>
                <tr>
                  <th>no.</th>
                  <th>장비</th>
                  <th>
                    누적유효전력량 <p>(kWh)</p>
                  </th>
                  <th>
                    누적무효전력량
                    <p>(kvarh)</p>
                  </th>
                  <th>
                    A상 전압
                    <p>(V)</p>
                  </th>
                  <th>
                    B상 전압
                    <p>(V)</p>
                  </th>
                  <th>
                    C상 전압
                    <p>(V)</p>
                  </th>
                  <th>
                    A상 전류
                    <p>(A)</p>
                  </th>
                  <th>
                    B상 전류
                    <p>(A)</p>
                  </th>
                  <th>
                    C상 전류
                    <p>(A)</p>
                  </th>
                  <th>일시</th>
                </tr>
              </thead>
            </table>
            <div className="bbs-list-wrap !bg-transparent !h-auto flex-none">
              <div className="bbs-scroll">
                <table className="bbs-list-table table-small">
                  <colgroup>
                    <col width="50px" />
                    <col width="50px" />
                    <col width="100px" />
                    <col width="100px" />
                    <col width="90px" />
                    <col width="90px" />
                    <col width="90px" />
                    <col width="90px" />
                    <col width="90px" />
                    <col width="90px" />
                    <col width="auto" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <td rowSpan={2}>1</td>
                      <td>RTU_1</td>
                      <td>100</td>
                      <td rowSpan={2}>100</td>
                      <td rowSpan={2}>100</td>
                      <td rowSpan={2}>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td rowSpan={2}>
                        25.09.25 <br />
                        16:10:00
                      </td>
                    </tr>
                    <tr>
                      <td>RTU_1</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td rowSpan={2}>1</td>
                      <td>RTU_1</td>
                      <td>100</td>
                      <td rowSpan={2}>100</td>
                      <td rowSpan={2}>100</td>
                      <td rowSpan={2}>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td rowSpan={2}>
                        25.09.25 <br />
                        16:10:00
                      </td>
                    </tr>
                    <tr>
                      <td>RTU_1</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td rowSpan={2}>1</td>
                      <td>RTU_1</td>
                      <td>100</td>
                      <td rowSpan={2}>100</td>
                      <td rowSpan={2}>100</td>
                      <td rowSpan={2}>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td rowSpan={2}>
                        25.09.25 <br />
                        16:10:00
                      </td>
                    </tr>
                    <tr>
                      <td>RTU_1</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td rowSpan={2}>1</td>
                      <td>RTU_1</td>
                      <td>100</td>
                      <td rowSpan={2}>100</td>
                      <td rowSpan={2}>100</td>
                      <td rowSpan={2}>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td rowSpan={2}>
                        25.09.25 <br />
                        16:10:00
                      </td>
                    </tr>
                    <tr>
                      <td>RTU_1</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td rowSpan={2}>1</td>
                      <td>RTU_1</td>
                      <td>100</td>
                      <td rowSpan={2}>100</td>
                      <td rowSpan={2}>100</td>
                      <td rowSpan={2}>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td rowSpan={2}>
                        25.09.25 <br />
                        16:10:00
                      </td>
                    </tr>
                    <tr>
                      <td>RTU_1</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td rowSpan={2}>1</td>
                      <td>RTU_1</td>
                      <td>100</td>
                      <td rowSpan={2}>100</td>
                      <td rowSpan={2}>100</td>
                      <td rowSpan={2}>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td rowSpan={2}>
                        25.09.25 <br />
                        16:10:00
                      </td>
                    </tr>
                    <tr>
                      <td>RTU_1</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td rowSpan={2}>1</td>
                      <td>RTU_1</td>
                      <td>100</td>
                      <td rowSpan={2}>100</td>
                      <td rowSpan={2}>100</td>
                      <td rowSpan={2}>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td rowSpan={2}>
                        25.09.25 <br />
                        16:10:00
                      </td>
                    </tr>
                    <tr>
                      <td>RTU_1</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentModal>
  );
}
