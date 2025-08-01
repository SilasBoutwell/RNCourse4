import { View, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constants/styles";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
  { id: 'e1', description: 'A pair of shoes', amount: 59.99, date: new Date('2025-07-19') },
  { id: 'e2', description: 'Rent', amount: 1200, date: new Date('2025-06-19') },
  { id: 'e3', description: 'Utilities', amount: 200, date: new Date('2025-06-25')},
  { id: 'e4', description: 'Book', amount: 14.99, date: new Date('2025-07-25')},
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  )
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  }
});