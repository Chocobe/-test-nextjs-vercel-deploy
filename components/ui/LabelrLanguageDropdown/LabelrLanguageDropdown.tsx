// react
import {
    useCallback,
    memo,
} from 'react';
// styled-components
import styled from 'styled-components';
// i18n
import {
    useTranslation,
} from 'react-i18next';
import { ChangeEvent } from 'react';

const StyledLabelrLanguageDropdownRoot = styled.select`
    padding: 4px 8px;
`;

function LabelrLanguageDropdown() {
    // hook
    const { i18n } = useTranslation();

    const onChangeLanguage = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(e.currentTarget.value);
    }, [i18n]);

    return (
        <StyledLabelrLanguageDropdownRoot
            value={i18n.language}
            onChange={onChangeLanguage}>
            <option value="ko">한국어</option>
            <option value="en">English</option>
        </StyledLabelrLanguageDropdownRoot>
    );
}

export default memo(LabelrLanguageDropdown);
