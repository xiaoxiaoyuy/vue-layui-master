/**
 * Salary薪资计算
 */

import SalaryInfo from './src/salaryinfo';

/* istanbul ignore next */
SalaryInfo.install = function(Vue) {
	Vue.component(SalaryInfo.name, SalaryInfo);
};

export default SalaryInfo;