import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: const Color(0xFF123456),
        title: const Text('News Insight', style: TextStyle(color: Colors.white)),
      ),
      body: const Center(child: Text('Home Page')),
    );
  }
}
