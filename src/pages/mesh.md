---
layout: ../layouts/SiteLayout.astro
title: Long-Range Mesh-based communications (Mesh)
description: All you need to know about MeshCore and Meshtastic.
---

## LoRa in General

The Mesh networks provide another means of off-grid communications in the 900 MHz band, using text messages. LoRa also allows for data communication and monitoring of sensors across the network. Three popular networks exist within the LoRa world, and the hardware works with all three. MeshCore and Meshtastic are two off-grid text-based messaging protocols for use as an alternate means of communications. What's used the most depends on what the area is accepting. For example, the plains states (Iowa, the Dakotas, Missouri) use Meshtastic almost exclusively (Though that's changing). Others, like Wisconsin, Michigan, Illinois and Minnesota focus on MeshCore.

## MeshCore

<img src="../images/mesh_repeater.JPG" alt="MeshCore repeater" width="400" style="float: right; margin: 5px;">
MeshCore is an open-source LoRa mesh platform for sending text off-grid — no internet, no cell, no subscription. It runs on the same cheap LoRa boards as Meshtastic; it’s just different firmware.

Its big idea is roles. Instead of every node relaying everything (which gets noisy fast), MeshCore splits the network into companions, repeaters, and room servers. Companion radios don’t rebroadcast by default, so the airwaves stay clear and the mesh scales cleanly — you grow coverage by placing repeaters up high, not by adding chatter. (lifted from [RFLab.io: MeshCore](https://rflab.io/topics/MeshCore.html))

HVARC members have been participating in MeshCore activity since 2026 Along with UWP-ARC (UW Platteville's student club) to install repeaters, beginning in Platteville. The area backbone repeater is **UWP-1-Platteville-Mound**, which covers a wide area of Grant, Iowa and Lafayette Counties and links us to the rest of the **Dubuque mesh**, to **Madison Mesh** and beyond. The UWP Club has also installed a campus repeater on Ottensman Hall's roof, **UWP-6-Otts**. Both of these repeaters been installed high enough to be connected to from potentially as far away as Potosi, Lancaster, and Hazel Green. It is part of a larger scale mesh centering around Madison and includes Dodgeville, Janesville/Beloit, Portage, Sauk City, and beyond to Milwaukee and Chicago. HVARC and UWP-ARC are working to install a repeater on the Hospital roof to take advantage of its location on high ground and its line of sight around the area.

The long term goal will be assisting in establishing meshes in neighboring counties in Illinois, Iowa, and Wisconsin along the Mississippi River - and helping to support/train users and maintainers.

Individual members have already set up companion radios (used with smart phone apps to send messages and manage repeaters) ,installed MeshCore repeaters on their homes, and/or set up observers and room servers.

As MeshCore is a networked mesh, strategic placement of repeaters goes a long way to making sure data is properly and efficiently transmitted/received. Room Servers provide a means of message storage for later retrieval. Either of these can double as the role of "Observer", which collects info on repeaters and rooms and maps them for reference. [RFLab.io](https://rflab.io/index.html). Tools are present to help set up infrastructure in your home, as well as for large scale tower installs.

### Resources

- [Official Site](https://MeshCore.io) - [Discord](https://discord.gg/9CuBE47KR)
  - [MeshCore docs](https://docs.MeshCore.io/?utm_source=chatgpt.com)
- [RFLab.io](https://rflab.io) - [Discord](https://discord.gg/SRxKpRWrBQ)- Wisconsin-based community dedicated to promoting and providing resources on mesh - focusing on MeshCore tools
  - CoreScope: live monitor of the mesh network worldwide as the hop from repeater to repeater, with details of the packet types for examination and improvement
  - Tower Map: Map of existing Wisconsin towers that could be candidates for new wide-area repeaters - with a tool to calculate reachability.
- [Meshmapper](https://meshmapper.net/) - [Discord](https://discord.gg/KbqcJVzYP): A real-time map of repeaters/room servers and a grid-based record of coverage mapped to the repeaters. Crowdsourced through the act of "wardriving" (pinging repeaters on the fly along roads)
  - Region maps: [DBQ](https://dbq.meshmapper.net) our region, [MSN](https://msn.meshmapper.net/) our sister region (Iowa County, WI)

## Meshtastic

Meshtastic turns an inexpensive radio board into a node on a self-healing mesh network. Each node can send and receive short text messages and share GPS location, and — crucially — every node relays for the others. A message hops node to node until it reaches you, so the network’s reach grows with every person who joins.

It runs over LoRa (Long Range) radio in a license-free band, so anyone can use it — no ham license, no SIM card, no monthly bill. Messages are encrypted with AES-256 by default. It’s a favorite for hiking, overlanding, events, emergency prep, and just covering a town with a community network.

While there are opportunities for working with Meshtastic in Dubuque and beyond into Iowa, and it's alive in parts of Wisconsin such as Milwaukee. we have had little luck in getting going with this form of mesh. However if individual members wish to participate, they are welcome to. (lifted from [RFLab.io: Meshtastic](https://rflab.io/topics/meshtastic.html))

### Resources

- [Official Site](https://www.meshtastic.org) - [Discord](https://discord.gg/meshtastic)
- [MeshConsin](https://meshconsin.org/#about) - [Discord](https://discord.gg/f3cU7kPbHg) - Wisconsin resource site (for both Meshtastic and MeshCore)
- [Iowa Mesh Net](https://iowamesh.net/)
