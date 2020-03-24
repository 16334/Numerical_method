import React,{Component} from 'react';

class App extends Component{
  render(){
     const testStyle ={
      background: 'black',
      color: 'orange',
      fontSize: 50
    };
    
    const textStyle={
      background: 'indigo',
      color: 'gold'
    }; 
    return(
      <div>
        <h1 style={testStyle}><center>NUMERICAL METHOD</center></h1>
    
        <h3 style={textStyle}>ROOTS of EQUATION</h3>
          <h4><ul>
            <li><a href={"/Graphical"}>Graphical Method</a></li>
            <li><a href={"/Bisection"}>Bisection Method</a></li>
            <li><a href={"/Position"}>False-Position Method</a></li>
            <li><a href={"/OnePoint"}>One-Point Method</a></li>
            <li><a href={"/NewtonRaphson"}>Newton-Raphson Method</a></li>
            <li><a href={"/Secant"}>Secant Method</a></li>
          </ul></h4>

        <br/>

        <h3 style={textStyle}>INTERPOLATION and EXTRAPOLATION</h3>
         <h4><ul>
            <li><a href={"/NewtonDD"}>Newton's divided-differenees</a></li>
            <li><a href={"/Lagrange"}>Lagrange polynomaials</a></li>
            <li><a href={"/Spline"}>Spline interpolation</a></li>
        </ul></h4>

        <br/>

         <h3 style={textStyle}>LEAST-SQUARES REGRESSION</h3>

        <br/> 

        <h3 style={textStyle}>SOLUTIONS OF LINEAR ALGEBRAIC EQUATIONS</h3>
          <h4><ul>
            <li><a href={"/"}>Cramer’s Rule</a></li>
            <li><a href={"/"}>Gauss Elimination Method</a></li>
            <li><a href={"/"}>Gauss-Jordan Method</a></li>
            <li><a href={"/"}>LU Decomposition Method</a></li>
            <li><a href={"/"}>Cholesky Decomposition Method</a></li>
            <li><a href={"/"}> Jacobi Iteration Method</a></li>
            <li><a href={"/"}>Gauss-Seidel Iteration Method</a></li>
            <li><a href={"/"}>Conjugate Gradient Method</a></li>
          </ul></h4>
      </div>
    );
  }
}

export default App;
