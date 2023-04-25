import React, { useEffect, useState } from "react";
import TransactionTable from "./components/transactionTable";
import TransactionForm from "./components/transactionForm";



function App() {
   
  

        return(
        <div>
          <h1>My Transactions</h1>
         
          <TransactionTable />
          <br />
          <br />
          <TransactionForm />

        
        </div>
        )
}

export default App;
