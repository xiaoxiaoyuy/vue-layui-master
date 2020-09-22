/**
 * Salary薪资计算
 */

import Salary from './src/salary';

/* istanbul ignore next */
Salary.install = function(Vue) {
	Vue.component(Salary.name, Salary);
};

export default Salary;