

//what is high-level language?
// A high-level programming language is a programming language that is designed to be easily understood and used by humans. 
// It provides abstractions and features that make it easier to write and read code compared to low-level languages like assembly or machine code. 
// High-level languages are typically more portable and platform-independent, 
// as they abstract away the underlying hardware details. Examples of high-level languages include Python, Java, C++, and JavaScript.


//WHAT is Low-level language?
// A low-level programming language is a programming language that is closer to the machine code and hardware architecture of a computer. 
// It provides a more direct and detailed control over the computer's hardware resources. 
// Low-level languages are typically less portable and platform-dependent, as they are closely tied to specific hardware architectures. 
// Examples of low-level languages include assembly language and machine code. 
// Writing code in low-level languages requires a deeper understanding of the underlying hardware and is generally more complex 
// and error-prone compared to high-level languages.

//What is Machine code?
//Machine code, also known as machine language, is the lowest level of programming language. 
//It consists of binary instructions that are directly executed by a computer's hardware
// Machine code is the code that is actually executed by the computer.
// It is generally considered difficult to read and write machine code directly, 
//which is why higher-level programming languages and compilers were developed 
//to provide a more human-readable and portable way of writing code.

//What is Assembly language?
//Assembly language is a low-level programming language that provides 
//a more human-readable representation of machine code instructions. 
//It serves as a bridge between machine code and high-level programming languages.
//Assembly language programs are typically translated into machine code using an assembler. 
//The resulting machine code can then be executed directly by the computer's hardware


//What is bytecode?
//Bytecode is a form of intermediate code that is generated by a compiler or an interpreter. 
//It is a low-level representation of a program that is designed to be executed by a virtual machine or runtime environment.
//Bytecode is often used in languages like Java and Python.
//In Python, the Python interpreter compiles Python source code into bytecode, 
//which is then executed by the Python Virtual Machine (PVM).

//**************************************************************************** */

//***************************************************************************** */
// Compilers
// A compiler is a program that translates a high-level language to bytecode or machine code.
// At the same time, a compiler itself doesn't execute the resulting code. The user has to do it instead.

// Examples of compilers: GCC, javac, rustc

//***************************************************************************** */
// Transpilers
// A transpiler is similar to a compiler, but it translates source code to another high-level language instead of bytecode/machine code.
// A transpiler doesn't execute the resulting code too.

// Examples of transpilers: babel, tsc

//***************************************************************** */
// What is Babel?
// Babel is a JavaScript compiler that is used to convert the JavaScript code from one version of JavaScript to another.
//Babel is a popular JavaScript compiler that allows developers to write code in the latest version of JavaScript (ES6+) 
//and transpile it into an older version of JavaScript that is compatible with older browsers or environments.


//******************************************************************************* */
// Interpreters
// An interpreter, in turn, takes in the source code and executes it immediately. In other words, it runs it from the source.

// Examples of interpreters: Ruby MRI (CRuby), PHP3

//********************************************************** */
//Webpack
// The definition says,
// Webpack is a static module bundler for modern JavaScript applications.
// What do we mean by that?
// The bundler Webpack compiles all of the javascript files into a single bundle.js file that can be included into your HTML page. 
// Internally, Webpack constructs a dependency graph that maps all of your modules.

//touch index.html - (the page which is rendered and visible to the user)

// touch index.js - (the entry point for our application)