---
layout: ../layouts/SiteLayout.astro
title: Infrastructure
---

## Southwest Wisconsin Infrastructure

### Amateur Radio

Amateur — “ham” — radio is a licensed service for experimentation and communication across an enormous range of bands and modes. It’s where you go when you want to build, tinker, and reach further than any consumer radio allows.

Yes, it takes a test — but the entry-level Technician exam is very approachable: 35 multiple-choice questions drawn from a published pool, and most people pass after just 10–20 hours of study with free tools. No Morse code required.

[More Info...](https://rflab.io/topics/ham-radio.html)

#### Beetown Repeater

The club sponsors and operates the Beetown, WI 2-meter band (VHF) to support local conversation over the air as well as various nets

Repater connection tuning:

- 146.895 MHz, Offset -0.6 MHz, PL Tone 114.8 Hz

<!--Weekly Nets
- Sunday 9:00 pm - Club net
- Monday and Friday 7:30 am - Bigpatch Net
- Tuesday 7:30 am - Newbie Net
-->

#### Hospital Repeater

The Club also sponsosrs and operates the Southwest Health Hospital 70 cm band (UHF) repeater. This repeater serves as a low-power connection to the Beetown repeater for handheld radios (handie talkies) which cannot transmit the power needed to connect to Beetown directly.

Repeater connection tuning
444.325 MHz, Offset - 5.0 MHz, PL Tone 131.8 Hz

### MeshCore

MeshCore is an open-source LoRa mesh platform for sending text off-grid — no internet, no cell, no subscription. It runs on the same cheap LoRa boards as Meshtastic; it’s just different firmware.

Its big idea is roles. Instead of every node relaying everything (which gets noisy fast), MeshCore splits the network into companions, repeaters, and room servers. Companion radios don’t rebroadcast by default, so the airwaves stay clear and the mesh scales cleanly — you grow coverage by placing repeaters up high, not by adding chatter.

HVARC members have been participating in MeshCore activity since 2026 Along with UWP-ARC (UW Platteville's student club) to install repeaters, beginning in Platteville. The area backbone repeater is **UWP-1-Platteville-Mound**, which covers a wide area of Grant, Iowa and Lafayette Counties and links us to the rest of the Madison mesh. The UWP Club has also installed a campus repeater on Ottensman Hall's roof, **UWP-6-Otts**. Both of these repeaters been installed high enough to be connected to from potentially as far away as Potosi, Lancaster, and Hazel Green. It is part of a larger scale mesh cenetering around Madison and includes Dodgeville, Janesille/Beloit, Portage, Sauk City, and beyond to Milwaukee and Chicago. HVARC and UWP-ARC are working to install a repeater on the Hospital roof to take advantage of its location on high ground and its line of sight around the area.

Individual members have already installed Meshcore repeaters on their homes and or set up observers and room servers.

As Meshcore is a networked mesh, strategic placement of repeaters goes a long way to making sure data is properly and efficiently transmitted/received. [RFLab.io](https://rflab.io/index.html). Tools are present to help set up infrastructure in your home, as well as for large scale tower installs.

[More info...](https://rflab.io/topics/meshcore.html)

### Meshtastic

Meshtastic turns an inexpensive radio board into a node on a self-healing mesh network. Each node can send and receive short text messages and share GPS location, and — crucially — every node relays for the others. A message hops node to node until it reaches you, so the network’s reach grows with every person who joins.

It runs over LoRa (Long Range) radio in a license-free band, so anyone can use it — no ham license, no SIM card, no monthly bill. Messages are encrypted with AES-256 by default. It’s a favorite for hiking, overlanding, events, emergency prep, and just covering a town with a community network.

While there are opportunities for working with Meshtastic in Dubuque and beyond into Iowa, we have had little luck in getting going with this form of mesh. However if individual members wish to participate, they are welcome to.

[[More info...](https://rflab.io/topics/meshtastic.html)]
