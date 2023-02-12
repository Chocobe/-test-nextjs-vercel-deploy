// next
import Image from 'next/image';
// styled-components
import styled from 'styled-components';
// utils
import { 
    getStaticImageFilePath
} from '@/utils/getStaticFilePath';

const StyledConsoleLayoutHeaderRoot = styled.header`
    padding: 16px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.gs[200]};

    .logoWrapper {
        display: flex;
        align-items: center;
        gap: 6px;

        color: ${({ theme }) => theme.colors.brand[500]};
        font-size: 12px;
        line-height: 18px;
        font-weight: 700;
    }

    .accountInfoWrapper {
        display: flex;
        align-items: center;
        gap: 8px;

        &-logoWrapper {
            //
        }

        &-detail {
            //

            &-company {
                color: ${({ theme }) => theme.colors.black};
                font-size: 10px;
                line-height: 16px;
                font-weight: 600;
            }

            &-email {
                color: ${({ theme }) => theme.colors.gs[600]};
                font-size: 9px;
                line-height: 14px;
                font-weight: 400;
            }
        }
    }
`;

function ConsoleLayoutHeader() {
    return (
        <StyledConsoleLayoutHeaderRoot>
            <div className="logoWrapper">
                <Image
                    src={getStaticImageFilePath('logo-labelr.png')}
                    alt="레이블러"
                    width={24}
                    height={24} />
                Labelr
            </div>

            <div className="accountInfoWrapper">
                <figure className="accountInfoWrapper-logoWrapper">
                    <Image
                        src={getStaticImageFilePath('logo-amazon.png')}
                        alt="사용자"
                        width={24}
                        height={24} />
                </figure>

                <div className="accountInfoWrapper-detail">
                    <div className="accountInfoWrapper-detail-company">
                        Amazon
                    </div>
                    
                    <div className="accountInfoWrapper-detail-email">
                        yw@gmail.com
                    </div>
                </div>
            </div>
        </StyledConsoleLayoutHeaderRoot>
    );
}

export default ConsoleLayoutHeader;
