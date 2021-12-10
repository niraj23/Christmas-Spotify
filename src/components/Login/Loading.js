import React from 'react';
import ReactLoading from 'react-loading';
import '../../loading.css'

const Loading = () => (
    <ReactLoading id='load' type='spinningbubbles' color='red' height={'20%'} width={'20%'} />
);

export default Loading;
