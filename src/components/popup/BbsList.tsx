'use client';

import ContentModal from '@/components/ui/ContentModal';
import Image from 'next/image';
import { Button, Input } from 'antd';

interface BbsListProps {
  open: boolean;
  onCloseAction: () => void;
  onOpenWrite: () => void;
  onOpenDetail: () => void;
}

export default function BbsListPopup({
  open,
  onCloseAction,
  onOpenWrite,
  onOpenDetail,
}: BbsListProps) {
  return (
    <ContentModal open={open} onCloseAction={onCloseAction}>
      <div className="modal-con-header">
        <div className="flex items-center gap-1.5 w-[510px]">
          <Input placeholder="검색(제목 및 작성자)" className="input-content input-search" />
          <Button size="large" type="default" className="">
            검색
          </Button>
        </div>
      </div>
      <div className="modal-con-body">
        <div className="popup-content">
          <table className="bbs-list-table">
            <colgroup>
              <col width="70px" />
              <col width="650px" />
              <col width="165px" />
              <col width="auto" />
            </colgroup>
            <thead>
              <tr>
                <th>no</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
              </tr>
            </thead>
          </table>
          <div className="bbs-list-wrap">
            <table className="bbs-list-table">
              <colgroup>
                <col width="70px" />
                <col width="650px" />
                <col width="165px" />
                <col width="auto" />
              </colgroup>
              <tbody>
                <tr>
                  <td>55351</td>
                  <td>
                    <div className="bbs-title">
                      <button
                        type="button"
                        onClick={() => {
                          onCloseAction();
                          onOpenDetail();
                        }}
                      >
                        오늘 이전의 글은 년/월/일 + 시분초로솔팅됩니다.
                      </button>
                      <Image src="/icons/ico-file-text.svg" alt="" width={19} height={19} />
                      <Image src="/icons/ico-file-image.svg" alt="" width={19} height={19} />
                    </div>
                  </td>
                  <td>
                    <span className="user-name">홍길동</span>
                    <span className="user-nickname">(asdf***********)</span>
                  </td>
                  <td className="user-date">09:18:00</td>
                </tr>
                <tr>
                  <td>55351</td>
                  <td>
                    <div className="bbs-title">
                      <button type="button">
                        오늘 이전의 글은 너무 긴 제목의 텍스트는 긴 제목 오늘 이전의 글은 너무 긴
                        제목의 텍스트는 긴 제목 텍스트는~ 뒤에...으로 표기되게됩니다! ....
                      </button>
                      <Image src="/icons/ico-file-text.svg" alt="" width={19} height={19} />
                      <Image src="/icons/ico-file-image.svg" alt="" width={19} height={19} />
                    </div>
                  </td>
                  <td>
                    <span className="user-name">홍길동</span>
                    <span className="user-nickname">(asdf***********)</span>
                  </td>
                  <td className="user-date">09:18:00</td>
                </tr>
                <tr>
                  <td>55351</td>
                  <td>
                    <div className="bbs-title">
                      <button type="button">오늘 이전의 글은 년/월/일 + 시분초로솔팅됩니다.</button>
                      <Image src="/icons/ico-file-text.svg" alt="" width={19} height={19} />
                      <Image src="/icons/ico-file-image.svg" alt="" width={19} height={19} />
                    </div>
                  </td>
                  <td>
                    <span className="user-name">홍길동</span>
                    <span className="user-nickname">(asdf***********)</span>
                  </td>
                  <td className="user-date">09:18:00</td>
                </tr>
                <tr>
                  <td>55351</td>
                  <td>
                    <div className="bbs-title">
                      <button type="button">오늘 이전의 글은 년/월/일 + 시분초로솔팅됩니다.</button>
                      <Image src="/icons/ico-file-text.svg" alt="" width={19} height={19} />
                      <Image src="/icons/ico-file-image.svg" alt="" width={19} height={19} />
                    </div>
                  </td>
                  <td>
                    <span className="user-name">홍길동</span>
                    <span className="user-nickname">(asdf***********)</span>
                  </td>
                  <td className="user-date">09:18:00</td>
                </tr>
                <tr>
                  <td>55351</td>
                  <td>
                    <div className="bbs-title">
                      <button type="button">오늘 이전의 글은 년/월/일 + 시분초로솔팅됩니다.</button>
                      <Image src="/icons/ico-file-text.svg" alt="" width={19} height={19} />
                      <Image src="/icons/ico-file-image.svg" alt="" width={19} height={19} />
                    </div>
                  </td>
                  <td>
                    <span className="user-name">홍길동</span>
                    <span className="user-nickname">(asdf***********)</span>
                  </td>
                  <td className="user-date">09:18:00</td>
                </tr>
                <tr>
                  <td>55351</td>
                  <td>
                    <div className="bbs-title">
                      <button type="button">오늘 이전의 글은 년/월/일 + 시분초로솔팅됩니다.</button>
                      <Image src="/icons/ico-file-text.svg" alt="" width={19} height={19} />
                      <Image src="/icons/ico-file-image.svg" alt="" width={19} height={19} />
                    </div>
                  </td>
                  <td>
                    <span className="user-name">홍길동</span>
                    <span className="user-nickname">(asdf***********)</span>
                  </td>
                  <td className="user-date">09:18:00</td>
                </tr>
                <tr>
                  <td>55351</td>
                  <td>
                    <div className="bbs-title">
                      <button type="button">오늘 이전의 글은 년/월/일 + 시분초로솔팅됩니다.</button>
                      <Image src="/icons/ico-file-text.svg" alt="" width={19} height={19} />
                      <Image src="/icons/ico-file-image.svg" alt="" width={19} height={19} />
                    </div>
                  </td>
                  <td>
                    <span className="user-name">홍길동</span>
                    <span className="user-nickname">(asdf***********)</span>
                  </td>
                  <td className="user-date">09:18:00</td>
                </tr>
                <tr>
                  <td>55351</td>
                  <td>
                    <div className="bbs-title">
                      <button type="button">오늘 이전의 글은 년/월/일 + 시분초로솔팅됩니다.</button>
                      <Image src="/icons/ico-file-text.svg" alt="" width={19} height={19} />
                      <Image src="/icons/ico-file-image.svg" alt="" width={19} height={19} />
                    </div>
                  </td>
                  <td>
                    <span className="user-name">홍길동</span>
                    <span className="user-nickname">(asdf***********)</span>
                  </td>
                  <td className="user-date">09:18:00</td>
                </tr>
                <tr>
                  <td>55351</td>
                  <td>
                    <div className="bbs-title">
                      <button type="button">오늘 이전의 글은 년/월/일 + 시분초로솔팅됩니다.</button>
                      <Image src="/icons/ico-file-text.svg" alt="" width={19} height={19} />
                      <Image src="/icons/ico-file-image.svg" alt="" width={19} height={19} />
                    </div>
                  </td>
                  <td>
                    <span className="user-name">홍길동</span>
                    <span className="user-nickname">(asdf***********)</span>
                  </td>
                  <td className="user-date">09:18:00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bbs-footer">
            <div className="pagination">
              <button type="button">
                <Image src="/icons/ico-paging-pprev.svg" alt="" width={30} height={30} />
              </button>
              <button type="button">
                <Image src="/icons/ico-paging-prev.svg" alt="" width={30} height={30} />
              </button>
              <div className="pagination-list">
                <button type="button" className="active">
                  1
                </button>
                <button type="button">2</button>
                <button type="button">3</button>
                <button type="button">4</button>
                <button type="button">5</button>
              </div>
              <button type="button">
                <Image src="/icons/ico-paging-next.svg" alt="" width={30} height={30} />
              </button>
              <button type="button">
                <Image src="/icons/ico-paging-nnext.svg" alt="" width={30} height={30} />
              </button>
            </div>
            <div className="footer-menu">
              <Button
                type="default"
                className=""
                onClick={() => {
                  onCloseAction();
                  onOpenWrite();
                }}
              >
                글쓰기
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ContentModal>
  );
}
