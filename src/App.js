import logo from './logo.svg';
import './App.css';
import ViewComponent from './component/viewcomponent';
import Secondcomponent from './component/secondcomponent';
import PaymEmployeeForm from './components/paymEmployee/paymEmployeeForm';
import CustomizedTables from './components/paymEmployee/CustomizedTables';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaymBranchTable from './components/PaymBranch/PaymBranchTable';
import PaymBranchForm from './components/PaymBranch/PaymBranchForm'
import SampleTable from './components/SampleTable';
import PaymEmpTable from './components/paymEmployee/PaymEmpTable';
import PaymBranchtablenew from './components/PaymBranch/PaymBranchtablenew';
import PaycompanyTable from './components/paymCompany/PaycompanyTable';
import PaymCompanyForm from './components/paymCompany/paymCompanyForm'
import AssetsTable from './components/Assets/AssetsTable';
import Sampleform from './components/Assets/sampleform';
import AttendenceTable from './components/AttendeceCeiling/AttendenceTable';
import AttendenceForm from './components/AttendeceCeiling/attendenceform';
import EarnDeductTable from './components/Earn Deduct/EarnDeductTable';
import EarnDeductForm from './components/Earn Deduct/EarnDeductForm'
import Form7table from './components/Form7/Form7table';
import SampleForm7 from './components/Form7/form7form';
import HrAuthenticationTable from './components/hrauthentication/HrAuthenticationTable';
import HrAuthForm  from './components/hrauthentication/HrAuthenticationForm';
import Hrmcoursetable from './components/hrmcourse/hrmcoursetable';
import HrmmCourseForm  from './components/hrmcourse/HrmmCourseForm';
import Hrmskillmastertable from './components/hrmskillmaster/Hrmskillmastertable';
import SkillsMasterForm from './components/hrmskillmaster/HrmmSkillsMasterForm';
import HrmmSpecializationtable from './components/hrmSpecilization/HrmmSpecializationtable';
import SpecializationForm from './components/hrmSpecilization/HrmmSpecializationForm';
import LeaveAppForm from './components/LeaveApply/LeaveApplyForm';
import LeaveApplyTable from './components/LeaveApply/LeaveApplyTable';
import LeaveSettleForm from './components/LeaveSettlement/LeaveSettlementForm';
import LeaveSettlementTable from './components/LeaveSettlement/LeaveSettlementTable';
import LeaveAllocationMasterTable from './components/LeaveAllocationMaster/LeaveAllocationMasterTable';
import LeaveAllocationForm from './components/LeaveAllocationMaster/LeaveAllocationMasterForm';
import LeaveApproveHrTable from './components/LeaveApproveHr/LeaveApproveHrTable';
import ApprovehrForm from './components/LeaveApproveHr/LeaveApproveHrForm';
import LoanPostTable from './components/LoanPost/LoanPostTable';
import LoanPostForm from './components/LoanPost/LoanPostForm';
import LoanPreCloserTable from './components/LoanPreCloser/LoanPreCloserTable';
import LoanPreclosForm from './components/LoanPreCloser/LoanPreclosureForm';
import Sample28 from './components/PaymLoan/PaymLoan';
import PaymLoanTable from './components/PaymLoan/PaymLoanTable';
import LoanEntryTable from './components/LoanEntry/LoanEntryTable';
import LoanEntForm from './components/LoanEntry/LoanEntryForm';
import OnDutyTable from './components/OnDuty/OnDutyTable';
import OndutyForm from './components/OnDuty/ondutyForm';
import OtsLabTable from './components/OtsLabs/OtsLabTable';
import OTSlabForm from './components/OtsLabs/OTSLabForm';
import Payslip from './components/Payslip';
import Hello from './components/Payslip';
import Paycalc from './components/Payslip';
import { Grid, Button } from '@mui/material';
import generatePDF from 'react-to-pdf';
import { useRef } from 'react';
import ButtonPrint from './components/ButtonPrint'

function App() {
  return (
    <div className="App">
      <ButtonPrint/>
         {/* <PaymEmployeeForm/> 
          <CustomizedTables/> 
         <Router>
          <Routes>
           <Route path="/" element={<PaymBranchTable />} />
          <Route path='/paymbranchform' element={<PaymBranchForm/>}/> 
          <Route path="/" element={<OtsLabTable/>}/>
          <Route path='/onduty' element={<OTSlabForm/>}/>
          
          </Routes>
         </Router> */}
         
    </div>
  );
}

export default App;
