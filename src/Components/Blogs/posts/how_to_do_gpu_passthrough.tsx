import React from "react";
import BlogTemplate from "../BlogTemplate";
import {
  Bold,
  Italic,
  InlineCode,
  CodeBlock,
  Quote,
  Link,
  Image,
  Divider,
  Callout,
  H2,
  H3,
  P,
} from "../BlogComponents";

export const meta = {
  slug: "how-to-do-gpu-passthrough",
  title: "How to Do GPU Passthrough on Fedora Linux",
  date: "2025-12-04",
  tags: [
    "Linux",
    "Fedora",
    "GPU Passthrough",
    "Virtualization",
    "Gaming",
    "VFIO",
  ],
  thumbnail: "/gpu_passthrough.png",
  description:
    "A comprehensive guide to setting up GPU passthrough on Fedora Linux, enabling you to run Windows VMs with native GPU performance using VFIO and Looking Glass.",
};

const HowToDoGpuPassthrough: React.FC = () => {
  return (
    <BlogTemplate
      title={meta.title}
      date={meta.date}
      tags={meta.tags}
      thumbnail={meta.thumbnail}
    >
      <H2>Overview</H2>
      <P>
        This guide will show you how to set up a laptop that can play modern AAA
        games with demanding graphics and stable performance, while solving the
        biggest problem facing Linux enthusiasts and PC gamers:{" "}
        <Bold>switching back and forth between Linux and Windows</Bold>.
      </P>
      <P>
        With GPU passthrough, you'll be able to run Windows in a virtual machine
        with near-native GPU performance, eliminating the need to dual boot!
      </P>

      <Divider />

      <H2>Phase 1 — Laptop Purchase and Initial Testing</H2>

      <H3>The Purchase</H3>
      <P>
        <Bold>ASUS TUF Gaming F15 FX507ZE-RS73 15.6" Laptop Computer</Bold>
      </P>

      <H3>Key Requirements</H3>
      <P>
        • <Bold>Integrated GPU:</Bold> Intel Iris Xe Graphics
        <br />• <Bold>Dedicated GPU:</Bold> NVIDIA GeForce RTX 3050 Ti
        <br />• <Bold>GPU MUX Switch:</Bold> Essential for switching between
        GPUs
        <br />• <Bold>CPU Supports IOMMU:</Bold> VT-D support required
        <br />• <Bold>Good IOMMU group isolation:</Bold> GPU should be in its
        own IOMMU group
      </P>

      <H3>Initial Testing</H3>
      <P>
        1. Press Power Button and answer setup questions
        <br />
        2. Plug in ethernet cable with network access
        <br />
        3. Unplug ethernet when asked for Microsoft account
        <br />
        4. Create a local login and let installer finish
        <br />
        5. Uninstall McAfee programs
        <br />
        6. Install OBS and Steam for Windows
        <br />
        7. Download a game and verify it works
      </P>

      <Divider />

      <H2>Phase 2 — Installing Linux and GPU Drivers</H2>

      <H3>Prepare Windows</H3>
      <P>
        Shrink Windows partition by 300GB (307200MB) to make room for Linux.
      </P>

      <H3>Create Installation Media</H3>
      <P>
        1. Download Fedora Media Writer
        <br />
        2. Insert USB Drive and create Fedora 37 installation media
        <br />
        3. Reboot
      </P>

      <H3>BIOS Configuration</H3>
      <P>
        1. Press <InlineCode>F2</InlineCode> while computer starts to launch
        UEFI/BIOS
        <br />
        2. Disable Fastboot
        <br />
        3. Save and exit
        <br />
        4. Press <InlineCode>F2</InlineCode> again and select Boot Menu
        <br />
        5. Boot from the Linux live USB
      </P>

      <H3>Install Fedora</H3>
      <P>
        1. Test the media and start the installer
        <br />
        2. Create Linux partitions in the empty space
        <br />
        3.{" "}
        <Bold>Verify that the installer is not deleting any partitions!</Bold>
        <br />
        4. Complete the installation
      </P>

      <H3>Update System</H3>
      <CodeBlock language="bash">{`sudo dnf update`}</CodeBlock>
      <P>Reboot after updates complete.</P>

      <H3>Install NVIDIA Drivers</H3>
      <P>First, enable RPM Fusion repositories:</P>
      <CodeBlock language="bash">
        {`sudo dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm

sudo dnf install akmod-nvidia
sudo dnf install xorg-x11-drv-nvidia-cuda`}
      </CodeBlock>

      <P>Check if drivers are done building:</P>
      <CodeBlock language="bash">{`modinfo -F version nvidia`}</CodeBlock>

      <P>
        Reboot → Press <InlineCode>F2</InlineCode> →{" "}
        <Bold>Disable SecureBoot</Bold>
      </P>

      <H3>Install Additional Software</H3>
      <CodeBlock language="bash">
        {`# Install OBS
sudo dnf install obs-studio

# Install Steam
sudo dnf install steam`}
      </CodeBlock>

      <P>Download and play a game to verify the GPU works correctly.</P>

      <Divider />

      <H2>Phase 3 — Getting Ready for Gaming VMs</H2>

      <H3>Install Virtualization Software</H3>
      <CodeBlock language="bash">
        {`sudo dnf groupinstall --with-optional virtualization`}
      </CodeBlock>

      <H3>Install KDE Plasma and Tools</H3>
      <CodeBlock language="bash">
        {`sudo dnf groupinstall "KDE Plasma Workspaces"
sudo dnf install gedit`}
      </CodeBlock>

      <H3>Find Your GPU PCI IDs</H3>
      <CodeBlock language="bash">{`lspci -nnk`}</CodeBlock>
      <P>
        Look for your NVIDIA GPU and note the IDs (e.g.,{" "}
        <InlineCode>10de:25a0,10de:2291</InlineCode>).
      </P>

      <H3>Configure GRUB</H3>
      <CodeBlock language="bash">{`sudo gedit /etc/sysconfig/grub`}</CodeBlock>

      <P>
        Add to <InlineCode>GRUB_CMDLINE_LINUX</InlineCode> arguments:
      </P>
      <CodeBlock language="bash">
        {`intel_iommu=on iommu=pt rd.driver.pre=vfio-pci rd.driver.blacklist=nouveau modprobe.blacklist=nouveau nvidia-drm.modeset=1 vfio-pci.ids=10de:25a0,10de:2291 module_blacklist=nouveau`}
      </CodeBlock>

      <P>Complete GRUB configuration should look like:</P>
      <CodeBlock language="bash">
        {`GRUB_TIMEOUT=5
GRUB_DISTRIBUTOR="$(sed 's, release .*$,,g' /etc/system-release)"
GRUB_DEFAULT=saved
GRUB_DISABLE_SUBMENU=true
GRUB_TERMINAL_OUTPUT="console"
GRUB_CMDLINE_LINUX="rd.driver.blacklist=nouveau modprobe.blacklist=nouveau nvidia-drm.modeset=1 rhgb quiet intel_iommu=on iommu=pt rd.driver.pre=vfio-pci rd.driver.blacklist=nouveau modprobe.blacklist=nouveau nvidia-drm.modeset=1 vfio-pci.ids=10de:25a0,10de:2291 module_blacklist=nouveau"
GRUB_DISABLE_RECOVERY="true"
GRUB_ENABLE_BLSCFG=true`}
      </CodeBlock>

      <P>Regenerate GRUB configuration:</P>
      <CodeBlock language="bash">
        {`sudo grub2-mkconfig -o /boot/grub2/grub.cfg`}
      </CodeBlock>

      <H3>Configure Dracut</H3>
      <CodeBlock language="bash">
        {`sudo gedit /etc/dracut.conf.d/local.conf`}
      </CodeBlock>

      <P>Add this content:</P>
      <CodeBlock language="bash">
        {`add_drivers+=" vfio vfio_iommu_type1 vfio_pci vfio_virqfd "`}
      </CodeBlock>

      <P>Regenerate initramfs:</P>
      <CodeBlock language="bash">
        {`sudo dracut -f --kver 'uname' -r`}
      </CodeBlock>

      <P>
        Reboot → <InlineCode>F2</InlineCode> → Enable VT-d and virtualization
        options
      </P>

      <H3>Select Plasma (Wayland) Environment</H3>
      <P>
        At login, click the settings icon in the bottom right and select{" "}
        <Bold>Plasma (Wayland)</Bold> before entering your password.
      </P>

      <H3>Verify GPU is Detached</H3>
      <CodeBlock language="bash">{`lspci -nnk`}</CodeBlock>
      <P>
        Check that <InlineCode>Kernel driver in use: vfio-pci</InlineCode> for
        your GPU.
      </P>

      <H3>Create Helper Aliases</H3>
      <CodeBlock language="bash">{`gedit ~/.bashrc`}</CodeBlock>

      <P>Add these aliases at the end:</P>
      <CodeBlock language="bash">
        {`alias hows-my-gpu='echo "NVIDIA Dedicated Graphics" | grep "NVIDIA" && lspci -nnk | grep "NVIDIA Corporation GA107M" -A 2 | grep "Kernel driver in use" && echo "Intel Integrated Graphics" | grep "Intel" && lspci -nnk | grep "Intel.*Integrated Graphics Controller" -A 3 | grep "Kernel driver in use" && echo "Enable and disable the dedicated NVIDIA GPU with nvidia-enable and nvidia-disable"'

alias nvidia-enable='sudo virsh nodedev-reattach pci_0000_01_00_0 && echo "GPU reattached (now host ready)" && sudo rmmod vfio_pci vfio_pci_core vfio_iommu_type1 && echo "VFIO drivers removed" && sudo modprobe -i nvidia_modeset nvidia_uvm nvidia && echo "NVIDIA drivers added" && echo "COMPLETED!"'

alias nvidia-disable='sudo rmmod nvidia_modeset nvidia_uvm nvidia && echo "NVIDIA drivers removed" && sudo modprobe -i vfio_pci vfio_pci_core vfio_iommu_type1 && echo "VFIO drivers added" && sudo virsh nodedev-detach pci_0000_01_00_0 && echo "GPU detached (now vfio ready)" && echo "COMPLETED!"'`}
      </CodeBlock>

      <P>
        Open a new terminal to use these commands:{" "}
        <InlineCode>nvidia-enable</InlineCode>,{" "}
        <InlineCode>nvidia-disable</InlineCode>,{" "}
        <InlineCode>hows-my-gpu</InlineCode>
      </P>

      <Divider />

      <H2>Phase 4 — Creating Your First VM</H2>

      <H3>Download Required Files</H3>
      <P>
        • Windows 10 ISO from Microsoft
        <br />• Windows 10 VirtIO drivers
      </P>

      <H3>Create the VM</H3>
      <P>
        1. Open <InlineCode>virt-manager</InlineCode>
        <br />
        2. Create a new VM and select the Windows 10 ISO
        <br />
        3. Allocate CPU and RAM (leave some for the host!)
        <br />
        4. Create a new 100GB Virtual Disk
        <br />
        5. Give the VM a unique name
        <br />
        6. Check <Bold>"Customize configuration before install"</Bold>
        <br />
        7. Set firmware to <Bold>UEFI</Bold> and chipset to <Bold>Q35</Bold>
        <br />
        8. Configure CPU topology (1 socket, multiple threads)
        <br />
        9. Set Windows 10 install disk as bootable
        <br />
        10. <Bold>Remove the network interface card</Bold> (avoids Microsoft
        account requirement)
      </P>

      <H3>Install Windows 10</H3>
      <P>
        1. Start the VM and press any key to boot from ISO
        <br />
        2. Click "Install Now"
        <br />
        3. Select "I don't have a product key"
        <br />
        4. Choose Windows 10 Home
        <br />
        5. Accept terms and install to the 100GB virtual drive
        <br />
        6. Answer setup questions
        <br />
        7. Disable telemetry, location tracking, etc.
      </P>

      <H3>Install VirtIO Drivers</H3>
      <P>
        1. Shutdown the VM
        <br />
        2. Make the main disk bootable
        <br />
        3. Remove the Windows 10 install disk
        <br />
        4. Add the VirtIO driver disk
        <br />
        5. Create a small virtual disk with <Bold>virtio</Bold> as the bus type
        <br />
        6. Boot the VM and install drivers from the disk
        <br />
        7. Verify in Device Manager that the virtio device is visible
        <br />
        8. Power down the VM
      </P>

      <H3>Convert Main Disk to VirtIO</H3>
      <P>
        1. In Virtual Machine Manager: <Bold>Edit → Preferences</Bold> → Enable
        XML Editing
        <br />
        2. Select the main disk, open the XML tab
        <br />
        3. Change bus from <InlineCode>sata</InlineCode> to{" "}
        <InlineCode>virtio</InlineCode>
        <br />
        4. Change address type to <InlineCode>pci</InlineCode>
      </P>

      <CodeBlock language="xml">
        {`<disk type="file" device="disk">
  <driver name="qemu" type="qcow2"/>
  <source file="/var/lib/libvirt/images/win10-vm1.qcow2"/>
  <target dev="sda" bus="virtio"/>
  <address type="pci" domain="0x0000" bus="0x00" slot="0x0e" function="0x0"/>
</disk>`}
      </CodeBlock>

      <P>
        5. Remove the VirtIO driver disk and small test disk
        <br />
        6. Boot the VM again to verify everything works
        <br />
        7. Shutdown the VM
      </P>

      <H3>Add GPU Passthrough</H3>
      <P>
        1. Add the network interface card back
        <br />
        2. Add the PCI devices for the GPU
        <br />
        3. Plug in an external monitor
        <br />
        4. Start the VM
        <br />
        5. Install NVIDIA drivers from NVIDIA's website
      </P>

      <Divider />

      <H2>Phase 5 — Looking Glass and Usability Upgrades</H2>

      <H3>Configure Input Devices</H3>
      <P>Find your mouse and keyboard devices:</P>
      <CodeBlock language="bash">
        {`ls /dev/input/by-id/
ls /dev/input/by-path/`}
      </CodeBlock>

      <P>Test your mouse:</P>
      <CodeBlock language="bash">
        {`sudo cat /dev/input/by-id/usb-PixArt_Lenovo_USB_Optical_Mouse-event-mouse`}
      </CodeBlock>
      <P>
        Press <InlineCode>Ctrl-C</InlineCode> to exit.
      </P>

      <P>Test your keyboard:</P>
      <CodeBlock language="bash">
        {`sudo cat /dev/input/by-path/platform-i8042-serio-0-event-kbd`}
      </CodeBlock>
      <P>
        Press <InlineCode>Ctrl-C</InlineCode> to exit.
      </P>

      <H3>Add Input Devices to VM</H3>
      <P>Add this XML to your VM config (adjust paths as needed):</P>
      <CodeBlock language="xml">
        {`<input type="evdev">
    <source dev="/dev/input/by-id/usb-PixArt_Lenovo_USB_Optical_Mouse-event-mouse"/>
</input>
<input type="evdev">
    <source dev="/dev/input/by-path/platform-i8042-serio-0-event-kbd" grab="all" grabToggle="ctrl-ctrl" repeat="on"/>
</input>`}
      </CodeBlock>
      <P>Remove the tablet input device to avoid conflicts.</P>

      <H3>Build Looking Glass from Source</H3>
      <P>Download and extract Looking Glass:</P>
      <CodeBlock language="bash">
        {`cd Downloads
tar -xzvf looking-glass-B6.tar.gz
cd looking-glass-B6`}
      </CodeBlock>

      <P>Install dependencies:</P>
      <CodeBlock language="bash">
        {`sudo dnf install cmake gcc gcc-c++ libglvnd-devel fontconfig-devel spice-protocol make nettle-devel \
                 pkgconf-pkg-config binutils-devel libXi-devel libXinerama-devel libXcursor-devel \
                 libXpresent-devel libxkbcommon-x11-devel wayland-devel wayland-protocols-devel \
                 libXScrnSaver-devel libXrandr-devel dejavu-sans-mono-fonts

sudo dnf install pipewire-devel libsamplerate-devel
sudo dnf install pulseaudio-libs-devel libsamplerate-devel`}
      </CodeBlock>

      <P>Build and install:</P>
      <CodeBlock language="bash">
        {`mkdir client/build
cd client/build
cmake ../
make
sudo make install`}
      </CodeBlock>

      <H3>Configure Looking Glass</H3>
      <P>Create shared memory file:</P>
      <CodeBlock language="bash">
        {`sudo gedit /etc/tmpfiles.d/10-looking-glass.conf`}
      </CodeBlock>

      <P>
        Add this content (replace <InlineCode>steeve</InlineCode> with your
        username):
      </P>
      <CodeBlock language="bash">
        {`# Type Path               Mode UID  GID Age Argument
f /dev/shm/looking-glass 0660 steeve qemu -`}
      </CodeBlock>

      <P>Set SELinux context:</P>
      <CodeBlock language="bash">
        {`sudo semanage fcontext -a -t svirt_tmpfs_t /dev/shm/looking-glass`}
      </CodeBlock>

      <P>Reboot and verify:</P>
      <CodeBlock language="bash">{`ls -alZ /dev/shm/looking-glass`}</CodeBlock>

      <H3>Add Looking Glass to VM</H3>
      <P>Add this XML to your VM config:</P>
      <CodeBlock language="xml">
        {`<shmem name='looking-glass'>
  <model type='ivshmem-plain'/>
  <size unit='M'>32</size>
</shmem>`}
      </CodeBlock>

      <H3>Install Looking Glass Host in Windows</H3>
      <P>
        1. Start the VM
        <br />
        2. Download Looking Glass Host application
        <br />
        3. Install and run it (it should auto-start on boot)
      </P>

      <H3>Connect from Linux Host</H3>
      <CodeBlock language="bash">{`looking-glass-client -s -m 97`}</CodeBlock>

      <P>
        Add alias to <InlineCode>~/.bashrc</InlineCode>:
      </P>
      <CodeBlock language="bash">
        {`alias looking-glass='looking-glass-client -s -m 97'`}
      </CodeBlock>

      <H3>Configure Windows Auto Login</H3>
      <P>
        1. Open Registry Editor
        <br />
        2. Navigate to:{" "}
        <InlineCode>
          HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows
          NT\CurrentVersion\Winlogon
        </InlineCode>
        <br />
        3. Create new string entries:
      </P>
      <CodeBlock language="text">
        {`AutoAdminLogon=1
DefaultUserName=your_username
DefaultPassword=your_password`}
      </CodeBlock>
      <P>Reboot to test auto-login.</P>

      <Divider />

      <H2>Notes on Using Your Laptop</H2>

      <Callout>
        <P>
          <Bold>Key Tips:</Bold>
        </P>
        <P>
          • Press both <InlineCode>Ctrl</InlineCode> keys simultaneously to
          switch mouse/keyboard between guest and host
          <br />
          • Keep the Spice window open and minimized for audio to work
          <br />
          • Set VM audio output to "Speakers" (note: slight audio delay is
          normal)
          <br />
          • Disable screen dimming and auto-lock in Linux power settings to
          prevent the display from sleeping during gaming
          <br />• Use <InlineCode>nvidia-enable</InlineCode> to game natively on
          Linux
          <br />• Use <InlineCode>nvidia-disable</InlineCode> to prepare GPU for
          VM passthrough
          <br />• Use <InlineCode>looking-glass</InlineCode> to connect to your
          Windows VM
        </P>
      </Callout>

      <Divider />

      <H2>Conclusion</H2>
      <P>
        Congratulations! You now have a fully functional GPU passthrough setup
        that lets you run Windows games with near-native performance while
        staying in Linux. This setup eliminates the need for dual booting and
        gives you the <Bold>best of both worlds</Bold>!
      </P>
      <P>
        The ability to toggle between native Linux gaming and Windows VM gaming
        with simple commands makes this setup incredibly flexible for any use
        case.
      </P>
    </BlogTemplate>
  );
};

export default HowToDoGpuPassthrough;
