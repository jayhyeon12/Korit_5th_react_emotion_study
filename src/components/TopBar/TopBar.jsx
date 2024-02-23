/** @jsxImportSource @emotion/react */

import { useMemo, useState } from 'react';
import * as S from './TopBarstyle';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function TopBar() {
    const [ isShow, setShow ] = useState(false);

    const menus = useMemo(() => [
        {
            id: 1,
            path: "/introduction",
            menuname: "기관소개"
        },
        {
            id: 2,
            path: "/curriculum",
            menuname: "교육과정"
        },
        {
            id: 3,
            path: "/Q&A",
            menuname: "묻고답하기"
        },
    ], []);

    return (
        <aside css={S.layout(isShow)}>
            <button css={S.toggleButton} onClick={() => setShow(!isShow)}>
                {isShow? <FaCaretUp /> : <FaCaretDown />}
            </button>
            <ul css={S.menuList}>
                {menus.map(menu => 
                    <Link css={S.menuItem} to={menu.path} key={menu.id} onClick={() => setShow(false)}>
                        <li>{menu.menuname}</li>
                    </Link>
                )}
            </ul>
        </aside>
    );
}

export default TopBar;