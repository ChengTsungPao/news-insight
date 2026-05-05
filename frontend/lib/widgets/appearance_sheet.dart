import 'package:flutter/material.dart';
import '../main.dart';

class AppearanceSheet extends StatelessWidget {
  const AppearanceSheet({super.key});

  @override
  Widget build(BuildContext context) {
    final currentMode = MyApp.of(context).themeMode;

    final options = [
      (label: 'Light', icon: Icons.light_mode_outlined, mode: ThemeMode.light),
      (label: 'Dark', icon: Icons.dark_mode_outlined, mode: ThemeMode.dark),
      (label: 'Follow System', icon: Icons.brightness_auto_outlined, mode: ThemeMode.system),
    ];

    return SafeArea(
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 16),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Container(
              width: 40,
              height: 4,
              margin: const EdgeInsets.only(bottom: 16),
              decoration: BoxDecoration(
                color: Colors.grey[400],
                borderRadius: BorderRadius.circular(2),
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(bottom: 8, left: 20),
              child: Align(
                alignment: Alignment.centerLeft,
                child: Text(
                  'Appearance',
                  style: Theme.of(context).textTheme.titleMedium?.copyWith(fontWeight: FontWeight.bold),
                ),
              ),
            ),
            for (final opt in options)
              ListTile(
                leading: Icon(opt.icon),
                title: Text(opt.label),
                trailing: currentMode == opt.mode
                    ? Icon(Icons.check, color: Theme.of(context).colorScheme.primary)
                    : null,
                onTap: () {
                  MyApp.of(context).setThemeMode(opt.mode);
                  Navigator.pop(context);
                },
              ),
          ],
        ),
      ),
    );
  }
}
