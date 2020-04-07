import React from 'react';
import styles from './SpaceNavigator.scss';
import classNames from 'classnames/bind';
import {TiChevronLeft} from 'react-icons/ti';
import {TiChevronRight} from 'react-icons/ti';

const cx = classNames.bind(styles);

const SpaceNavigator = ({ onPrev, onNext }) => {
    return (
        <div className={cx('space-navigator')}>
            <div className={cx('left', 'end')}>
                <div className={cx('circle')} onClick={onPrev}>
                    <TiChevronLeft/>
                </div>
            </div>
            <div className={cx('right', 'end')}>
                <div className={cx('circle')} onClick={onNext}>
                    <TiChevronRight/>
                </div>
            </div>
        </div>
    );
}

export default SpaceNavigator;