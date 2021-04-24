import $ from 'jquery';
import 'jquery-mask-plugin';

const JMask = () => {
    $('.cpf-mask').mask('000.000.000-00');
    $('.zip-code-mask').mask('00000-000');
    $('.phone-mask').mask('(00) 00000-0000');
    $('.date-mask').mask('00/00/0000');
};

export default JMask;