// @flow strict
import React, { useEffect } from 'react';
import styles from './Adfit.module.scss';
import classNames from 'classnames';

type Props = {
  name: string,
  unit: string,
  width: string,
  height: string,
};

const Adfit = ({ name, pc, mobile, width = '728', height = '90' }: Props) => {
  useEffect(() => {
    let ins = document.createElement('ins');
    let script = document.createElement('script');

    ins.key = name;
    ins.className = 'kakao_ad_area';
    ins.style = 'display: none; width: 100%;';
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

    document.querySelector(`div.${name} > div.ad_area`).appendChild(ins);
    document.querySelector(`div.${name} > div.ad_area`).appendChild(script);
  }, []);

  return (
    <div className={classNames(styles['adfit'], name)}>
      <div className={'ad_area'}></div>
    </div>
  );
};

export default Adfit;
