import { LightningElement, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { registerListener, unregisterAllListeners } from 'c/pubsub';

export default class EmployeeRoleSummary extends LightningElement {
  summary = [];

  @wire(CurrentPageReference) pageRef;

  connectedCallback() {
    registerListener('pubsubpublish', this.updateSummary, this);
  }

  disconnectedCallback() {
    unregisterAllListeners(this);
  }

  updateSummary(employeeList) {
    const roles = {
      Developer: 0,
      Manager: 0,
      Hr: 0
    };

    (employeeList || []).forEach(emp => {
      if (roles.hasOwnProperty(emp.role)) {
        roles[emp.role]++;
      }
    });

    this.summary = Object.keys(roles).map(role => ({
      role,
      count: roles[role]
    }));
  }

  get noData() {
    return this.summary.length === 0;
  }
}