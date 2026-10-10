import zlib
import struct
import math

def create_png(width, height, is_maskable=False):
    # PNG signature
    png = b'\x89PNG\r\n\x1a\n'
    
    # IHDR chunk
    ihdr_data = struct.pack('>IIBBBBB', width, height, 8, 6, 0, 0, 0)
    ihdr_crc = zlib.crc32(b'IHDR' + ihdr_data)
    png += struct.pack('>I', 13) + b'IHDR' + ihdr_data + struct.pack('>I', ihdr_crc)
    
    # Generate image raw scanlines (Filter byte 0 + RGBA)
    raw = bytearray()
    cx, cy = width / 2.0, height / 2.0
    radius = (min(width, height) / 2.0) * (0.80 if is_maskable else 0.92)
    
    for y in range(height):
        raw.append(0) # filter type 0 (None)
        for x in range(width):
            dx = x - cx
            dy = y - cy
            dist = math.sqrt(dx * dx + dy * dy)
            
            # Deep royal emerald gradient
            t = (y / float(height))
            r = int(2 + t * 4)
            g = int(44 + t * 40)
            b = int(34 + t * 25)
            a = 255
            
            # Draw golden emblem / circular crest inside
            if dist < radius:
                # Golden scales / emblem center
                crest_dist = math.sqrt(dx*dx + (dy + height * 0.08)**2)
                if abs(dist - radius) < width * 0.03: # Outer gold ring
                    r, g, b = 251, 191, 36
                elif abs(dx) < width * 0.02 and abs(dy) < height * 0.25: # Vertical beam
                    r, g, b = 245, 158, 11
                elif abs(dy + height * 0.08) < height * 0.02 and abs(dx) < width * 0.28: # Horizontal balance
                    r, g, b = 245, 158, 11
                elif dy > height * 0.12 and dy < height * 0.32 and abs(dx) < width * 0.32: # Law book
                    r, g, b = 16, 185, 129
                    if abs(dx) < width * 0.015:
                        r, g, b = 254, 243, 199
            elif not is_maskable:
                # Rounded corners for non-maskable
                corner_radius = width * 0.20
                in_corner_x = min(x, width - 1 - x) < corner_radius
                in_corner_y = min(y, height - 1 - y) < corner_radius
                if in_corner_x and in_corner_y:
                    corner_dx = corner_radius - min(x, width - 1 - x)
                    corner_dy = corner_radius - min(y, height - 1 - y)
                    if math.sqrt(corner_dx**2 + corner_dy**2) > corner_radius:
                        a = 0
            
            raw.extend([r, g, b, a])
            
    # IDAT chunk
    compressed = zlib.compress(bytes(raw), 9)
    idat_crc = zlib.crc32(b'IDAT' + compressed)
    png += struct.pack('>I', len(compressed)) + b'IDAT' + compressed + struct.pack('>I', idat_crc)
    
    # IEND chunk
    iend_crc = zlib.crc32(b'IEND')
    png += struct.pack('>I', 0) + b'IEND' + struct.pack('>I', iend_crc)
    
    return png

if __name__ == '__main__':
    with open('public/pwa-192x192.png', 'wb') as f:
        f.write(create_png(192, 192, False))
    with open('public/pwa-512x512.png', 'wb') as f:
        f.write(create_png(512, 512, False))
    with open('public/pwa-maskable-512x512.png', 'wb') as f:
        f.write(create_png(512, 512, True))
    with open('public/apple-touch-icon.png', 'wb') as f:
        f.write(create_png(180, 180, False))
    print("PWA PNG icons generated successfully!")
