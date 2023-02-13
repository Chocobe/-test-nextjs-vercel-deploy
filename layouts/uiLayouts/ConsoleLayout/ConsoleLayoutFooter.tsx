// styled-components
import styled from 'styled-components';

const StyledConsoleLayoutFooter = styled.footer`
    padding: 9px 16px;
    background-color: ${({ theme }) => theme.colors.gs[50]};
    border-top: 1px solid ${({ theme }) => theme.colors.gs[200]};

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 8px;
    column-gap: 20px;

    .deepnaturalInfo {
        color: ${({ theme }) => theme.colors.gs[400]};
        font-size: 9px;
        line-height: 14px;
        font-weight: 400;
    }

    .footerNavWrapper {
        margin-left: auto;

        .footerNav {
            display: flex;
            gap: 20px;

            &-item {
                color: ${({ theme }) => theme.colors.gs[600]};
                font-size: 9px;
                line-height: 14px;
                font-weight: 500;

                list-style: none;
            }
        }
    }
`;

function ConsoleLayoutFooter() {
    return (
        <StyledConsoleLayoutFooter>
            <div className="deepnaturalInfo">
                DeepNatural Inc. ︱ CEO: Sangwon Park ︱ Business Number: 809-87-00669 ︱ Phone: 82-2-6952-0588 ︱ Office: #L105, B1, 484, Gangnam-daero, Gangnam-gu, Seoul, Republic of Korea
            </div>

            <nav className="footerNavWrapper">
                <ul className="footerNav">
                    {/* TODO: <Link /> 로 바꾸기 */}
                    <li className="footerNav-item">Privacy</li>
                    <li className="footerNav-item">Terms</li>
                    <li className="footerNav-item">Cookie</li>
                </ul>
            </nav>
        </StyledConsoleLayoutFooter>
    );
}

export default ConsoleLayoutFooter;
