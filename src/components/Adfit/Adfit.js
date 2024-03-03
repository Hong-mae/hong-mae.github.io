// @flow strict
import React, { useEffect } from 'react';
import classNames from 'classnames';
import styles from './Adfit.module.scss';

type Props = {
    name: string,
    pc: string,
    mobile: string,
    width?: string,
    height?: string,
};

const Adfit = ({ name, pc, mobile, width = '728', height = '90' }: Props) => {
    useEffect(() => {
        const ins = document.createElement('ins');
        const script = document.createElement('script');

        ins.className = 'kakao_ad_area';
        ins.style.display = 'none';
        ins.style.width = '100%';

        if (window.innerWidth < 756) {
            ins.setAttribute('data-ad-unit', mobile);
        } else {
            ins.setAttribute('data-ad-unit', pc);
        }
        ins.setAttribute('data-ad-width', width);
        ins.setAttribute('data-ad-height', height);

        script.src = '//t1.daumcdn.net/kas/static/ba.min.js';
        script.async = true;
        script.type = 'text/javascript';

        const adfitArea = document.querySelector(`div.${name}.ad_area`);
        if (adfitArea) {
            adfitArea.append(ins);
            adfitArea.append(script);
        }
    }, []);

    return (
        <div className={styles['adfit']}>
            <div className={classNames(name, 'ad_area')}></div>
        </div>
    );
};

export default Adfit;
