 # :fallen_leaf: :leaves: Testinium-QA :leaves: :fallen_leaf:
Automating the Testinium browser  (JAVA, Selenium, Cucumber, JUnit, Jira, Jenkins)

### Tools

<p align="left"> 

<a href="https://www.java.com" target="_blank" rel="noreferrer"> 
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="60" height="60"/> 
</a> 

<a href="https://www.selenium.dev" target="_blank" rel="noreferrer">
  <img src="https://selenium.dev/images/selenium_logo_square_green.png" alt="selenium" width="60" height="60"/> 
</a>    

<a href="https://www.oracle.com/" target="_blank" rel="noreferrer"> 
  <img src="https://lisacrispin.com/wp-content/uploads/2019/01/Screen-Shot-2019-01-17-at-12.13.33-PM.png" alt="oracle" width="60" height="60"/> 
</a>

<a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPEOYG6Ap6vFoqv5bNXkDvnCa1yAqbDr_f_YQhXa97QwYXvNqWIvnCzpFJJz1ZwcLrwbM&usqp=CAU" rel="noreferrer">
  <img src="https://www.codeaffine.com/wp-content/uploads/2016/02/junit-lambda.png" width="115" height="60"/> 
</a> 
<a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPEOYG6Ap6vFoqv5bNXkDvnCa1yAqbDr_f_YQhXa97QwYXvNqWIvnCzpFJJz1ZwcLrwbM&usqp=CAU" rel="noreferrer">
  <img src="https://i0.wp.com/invotra.com/wp-content/uploads/2019/09/jira_software_logo-e1571063680300.png?fit=768%2C216&ssl=1" width="160" height="60"/> 
</a> 
<a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPEOYG6Ap6vFoqv5bNXkDvnCa1yAqbDr_f_YQhXa97QwYXvNqWIvnCzpFJJz1ZwcLrwbM&usqp=CAU" rel="noreferrer">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png" width="50" height="80"/> 
</a> 
</p>

* JAVA
* SELENIUM
* CUCUMBER
* JUNIT
* JIRA
* JENKINS

### Node.js HTTP Server Tutorial

A comprehensive tutorial project demonstrating progressive enhancement from basic HTTP server to production-ready application with Node.js and Python equivalents.

## Project Overview

This repository contains a Java-based test automation framework (Testinium-QA) enhanced with a **Node.js HTTP Server Tutorial** that demonstrates:

1. **Basic HTTP Server**: Simple Node.js core http module implementation
2. **Express.js Integration**: Framework enhancement with routing and middleware
3. **Python Flask Port**: Language-agnostic equivalent implementation
4. **Production Features**: Security, logging, rate limiting, and process management
5. **Comprehensive Testing**: Jest/Mocha test suites with coverage analysis

---

## 🚀 Quick Start

### Prerequisites

- **Node.js**: v14+ (v20.19.4 tested)
- **Python**: 3.8+ (3.12.3 tested)
- **npm**: 6+ (10.8.2 tested)
- **pip**: Latest version (24.0 tested)

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd blitzy-a2526ce0
   ```

2. **Install Node.js dependencies**:
   ```bash
   npm install
   ```

3. **Install Python dependencies**:
   ```bash
   pip3 install -r requirements.txt
   ```

4. **Configure environment**:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

---

## 📖 Tutorial Server Usage

### Node.js Server

**Development Mode**:
```bash
npm run dev          # Hot reload with nodemon
```

**Production Mode**:
```bash
npm start            # Direct server start
npm run pm2:start    # PM2 process management
```

**Testing**:
```bash
npm test             # Run Jest test suite
npm run lint         # ESLint code quality check
```

### Python Flask Server

```bash
python3 app.py       # Start Flask server on port 3000
```

### API Endpoints

- **GET /hello** → Returns: "Hello world"
- **GET /good-evening** → Returns: "Good evening"  
- **GET /** (any other path) → Returns: "Hello world"

### Example Usage

```bash
# Test Node.js server
curl http://localhost:3000/hello
curl http://localhost:3000/good-evening

# Test Python server  
curl http://localhost:3000/hello
curl http://localhost:3000/good-evening
```

---

## 🏗️ Project Structure

```
├── README.md                 # This documentation
├── server.js                 # Node.js Express server
├── app.py                   # Python Flask equivalent
├── package.json             # Node.js dependencies
├── requirements.txt         # Python dependencies
├── server.test.js           # Jest test suite
├── jest.config.js           # Test configuration  
├── .eslintrc.js            # Code quality rules
├── nodemon.json            # Development server config
├── ecosystem.config.js     # PM2 deployment config
├── .env.example            # Environment template
├── .env                    # Runtime configuration
└── .gitignore              # Updated for Node.js/Python
```

---

## 🧪 Testing & Quality

### Running Tests

```bash
npm test                    # Full test suite with coverage
npm run test:watch         # Watch mode for development
```

### Test Coverage

- **Current Coverage**: ~59% statements, ~47% branches
- **Coverage Reports**: Generated in `coverage/` directory
- **Test Files**: `server.test.js` (15 tests covering all endpoints)

### Code Quality

```bash
npm run lint               # ESLint validation
npm run lint:fix          # Auto-fix linting issues
```

---

## 🔧 Configuration

### Environment Variables

```bash
# Server Configuration
PORT=3000                   # Server port
HOST=localhost             # Server host
NODE_ENV=development        # Environment mode

# Security Settings
RATE_LIMIT_WINDOW_MS=900000    # Rate limit window (15 min)
RATE_LIMIT_MAX_REQUESTS=100    # Max requests per window
CORS_ORIGIN=*                  # CORS allowed origins

# Logging Configuration  
LOG_LEVEL=info                 # Winston log level
LOG_FILE=logs/server.log       # Log file path
```

### Production Deployment

```bash
# PM2 Process Management
npm run pm2:start              # Start with PM2
npm run pm2:stop               # Stop PM2 processes
npm run pm2:restart            # Restart PM2 processes
npm run pm2:logs               # View PM2 logs

# Manual Production Start
NODE_ENV=production npm start
```

---

## 🔒 Security Features

- **Helmet.js**: Security headers (XSS, CSP, HSTS)
- **CORS**: Configurable cross-origin policies
- **Rate Limiting**: Request throttling per IP
- **Input Validation**: JSON parsing with error handling
- **Process Management**: Graceful shutdown handling

---

## 📈 Performance & Monitoring

- **Compression**: Gzip response compression
- **Logging**: Structured JSON logging with Winston
- **Request Tracking**: Full request/response cycle logging
- **Error Handling**: Comprehensive error capture and reporting

---

## 🐛 Troubleshooting

### Common Issues

1. **Express v5 Compatibility**: 
   - Use Express v4.18.0 for stability
   - Path-to-regexp issues resolved by downgrade

2. **Flask-Limiter Configuration**:
   - Ensure correct argument order: `Limiter(app=app, key_func=...)`

3. **Jest Configuration Conflicts**:
   - Use dedicated `jest.config.js`, remove from `package.json`

4. **Port Conflicts**:
   - Check if port 3000 is available
   - Modify PORT in `.env` if needed

### Debug Commands

```bash
# Check server status
curl -I http://localhost:3000/hello

# View detailed logs
npm run pm2:logs

# Test with verbose output
npm test -- --verbose
```

---

## 📚 Original Java Framework (Testinium-QA)

This repository also includes the original Testinium-QA Java automation framework:

This repository contains a collection of sample `Testinium-QA` projects and libraries that demonstrate how to
use the tool and develop automation script using the Cucumber BDD framework with Java as programming language.
It generate JSON, HTML and Txt reporters as well. It also generate `screen shots` for your tests if you enable it and
also generate `error shots` for your failed test cases as well.

### Installation (pre-requisites)

1. JDK 1.8+ 
2. Maven 
3. IntelliJ
4. IntelliJ Plugins for
    - Maven
    - Cucumber
5. Browser driver (make sure you have your desired browser driver and class path is set)

### Framework set up

Git:

    git clone https://github.com/BalamiRR/Testinium-QA.git
 
Manually :

Fork / Clone repository from [here](https://github.com/BalamiRR/Testinium-QA/archive/main.zip) or download zip and set
it up in your local workspace.



### Using canned test in the project:


```
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
    plugin = {
        "html:target/cucumber-reports.html",
        "json:target/cucumber.json",
        "rerun:target/rerun.txt",
        "me.jvt.cucumber.report.PrettyReports:target/cucumber"
    },
    features = "src/main/resources/features",
    glue = "com/testinium/step_definitions",
    dryRun = false,
    tags = "@LogOut"
)
public class CukesRunner {

}

```

### Develop automation scripts using BDD approach - Cucumber-Java

There are already many predefined StepDefinitions which is packaged under `/step_definitions/LoginSD.java` will help you speed
up your automation development that support both your favorite workaday helpers methods.

Tests are written in the Cucumber framework using the Gherkin Syntax.
Here is one of the scenarios:

```
@Login
Feature: Testinium app login feature
  User Story:
  As a user, I should be able to login with correct credentials to different accounts.

  Accounts are: PosManager, SalesManager

  Background: For the scenarios in the feature file, user is expected to be on login page
    Given User is on the Testinium login page

  #1-Users can log in with valid credentials (We have 5 types of users but will test only 2 user: PosManager, SalesManager)
  @UPGN-286
  Scenario Outline: Users log in with valid credentials
    When User enters "<username>" username
    And User enters "<password>" password
    And User clicks the login button
    Then User should see the dashboard
  
  #2-"Wrong login/password" should be displayed for invalid (valid username-invalid password and invalid username-valid password) credentials
  @UPGN-287
  Scenario Outline: Users log in with invalid email or invalid password credentials
    When User enters "<username>" username
    And User enters "<password>" password
    And User clicks the login button
    Then User sees error message
    
  #3- "Please fill out this field" message should be displayed if the password or username is empty
  @UPGN-288
  Scenario Outline:Users log in with invalid email or invalid password credentials
    When User enters "<password>" username
    And User clicks the login button
    Then User sees "Veuillez renseigner ce champ." message

    @SalesManager
    Examples: SalesManager's username and password
      |username               |password    |
      |salesmanager7@info.com |salesmanager|
      |salesmanager8@info.com |salesmanager|
      |salesmanager9@info.com |salesmanager|
      
    @PosManager
    Examples: PosManager's username and password
      |username               |password  |
      |posmanager5@info.com   |posmanager|
      |posmanager6@info.com   |posmanager|
```


### Jenkins Cucumber Reports
![alt text](./image/Jenkins-Cucumber-Reports.png)

##### HTML Report:

To generate HTML report use  `mvn test -Dcucumber.options="–plugin html:target/cucumber-reports.html"`

##### Txt Report:

To generate a Txt report Use `mvn test -Dcucumber.options="–plugin rerun:target/rerun.txt"`

### Jira Test Execution

  ![alt text](./image/Jira-Test-Exectuion.png)
  

  

### THE END

