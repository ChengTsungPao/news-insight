import 'package:flutter/material.dart';
import '../widgets/profile_header.dart';
import '../widgets/settings_tile.dart';
import '../widgets/appearance_sheet.dart';

class AccountPage extends StatelessWidget {
  const AccountPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ListView(
        children: [
          const ProfileHeader(),
          const Divider(height: 1),
          SettingsTile(
            icon: Icons.brightness_6_outlined,
            label: 'Appearance',
            onTap: () => showModalBottomSheet(
              context: context,
              shape: const RoundedRectangleBorder(
                borderRadius: BorderRadius.vertical(top: Radius.circular(16)),
              ),
              builder: (_) => const AppearanceSheet(),
            ),
          ),
          SettingsTile(
            icon: Icons.notifications_outlined,
            label: 'Notifications',
            onTap: () {},
          ),
          SettingsTile(
            icon: Icons.lock_outline,
            label: 'Privacy',
            onTap: () {},
          ),
          SettingsTile(
            icon: Icons.help_outline,
            label: 'Help & Support',
            onTap: () {},
          ),
          SettingsTile(
            icon: Icons.info_outline,
            label: 'About',
            onTap: () => showModalBottomSheet(
              context: context,
              builder: (_) => const Text('About'),
            ),
          ),
        ],
      ),
    );
  }
}
