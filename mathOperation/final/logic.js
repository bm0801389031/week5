/*function declaration named basicOp with parameters operation, 
value1, value2 */ 
function basicOp(operation, value1, value2) {
/* statement switch with the first parameter of my function 
(operation) [[switch statement evaluates on expression, in this
case operation, matching the expression's value(operations in this case)
to a case clause('+' one of my examples), and executes statements 
associated with the casea as well as statements in case's 
that follow the matching case.]]*/
    switch (operation) {
//case string plus colon
        case '+':
//return value1 pluse value2, simicolon
            return value1 + value2;
//case string minus, colon
        case '-':
//return value1 minus value2, simicolon
            return value1 - value2;
//case string times, colon
        case '*':
//return value1 times value2, simicolon
            return value1 * value2;
//case string division, colon
        case '/':
//return value1 divided value2, simicolon
            return value1 / value2;
//default, colon [[if none of the case claus matched the expression]] 
        default:
//return 0
            return 0;
    }
}