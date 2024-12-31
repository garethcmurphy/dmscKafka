# Kafka Publish and Consume for DMSC at ESS 🌐⚡  

This repository provides tools and scripts for publishing and consuming Kafka topics for the **Data Management and Software Center (DMSC)** at the **European Spallation Source (ESS)**. It includes **shell scripts** for Kafka management with `kafkacat` and **JavaScript implementations** for advanced Kafka operations.

---

## Features ✨  

- **Kafka Publishing**: Publish messages to Kafka topics with ease.  
- **Kafka Consumption**: Consume and process messages from Kafka topics.  
- **Shell Scripts**: Simple, quick operations using `kafkacat`.  
- **JavaScript Implementation**: Advanced handling and integrations with Kafka using Node.js.  

---

## Prerequisites 🛠️  

- A running Kafka instance (local or remote).  
- Shell environment with `kafkacat` installed.  
- Node.js (14+ recommended) for JavaScript implementations.  

---

## Installation  

1. Clone the repository:  
git clone https://github.com/your-username/kafka-dmsc-tools.git  
cd kafka-dmsc-tools  

2. Install dependencies for the JavaScript implementations:  
npm install  

---

## Usage 🔧  

### Shell Scripts  

1. **Publish a message to a Kafka topic**:  
   ./publish.sh <topic> <message>  

2. **Consume messages from a Kafka topic**:  
   ./consume.sh <topic>  

3. **List available topics**:  
   ./list_topics.sh  

### JavaScript Implementation  

1. **Run the producer**:  
   node producer.js <topic> <message>  

2. **Run the consumer**:  
   node consumer.js <topic>  

---

## File Structure 📂  

- `publish.sh`: Shell script to publish messages.  
- `consume.sh`: Shell script to consume messages.  
- `list_topics.sh`: Script to list available Kafka topics.  
- `producer.js`: JavaScript Kafka producer.  
- `consumer.js`: JavaScript Kafka consumer.  
- `README.md`: Documentation for the repository.  

---

## Example Commands  

- Publish a message:  
  ./publish.sh dmsc-data "Hello ESS"  

- Consume messages:  
  ./consume.sh dmsc-data  

- JavaScript Producer:  
  node producer.js dmsc-data "Hello ESS"  

---

## Contributing 🤝  

1. Fork the repository.  
2. Create a new branch:  
git checkout -b feature/your-feature  

3. Commit your changes:  
git commit -m "Add your feature"  

4. Push the branch:  
git push origin feature/your-feature  

5. Open a pull request.  

---

## License 📝  

This project is licensed under the MIT License. See the LICENSE file for details.  

---

**Streamline Kafka operations for DMSC at ESS with these tools!** 🌐⚡  
